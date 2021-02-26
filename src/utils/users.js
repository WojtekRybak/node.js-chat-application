const users = [];

//addUser
const addUser = ({ id, username, room }) =>{            //id? from individual socket
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate
    if(!username || !room){
        return {
            error : 'User name and room are required'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    // validate username
    if(existingUser){
        return {
            error : 'User name is in use!'
        }
    }
    const user = { id,username, room};
    users.push(user)
    return { user }
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id )
    if(index !== -1){
        return users.splice(index, 1)[0]       //remove item by index, 1 -hom meny items I want to remove, return array of all items I want to remove
    }
}

const getUser = (id)=> users.find(user => user.id === id)
const getUsersInRoom = (room) => users.filter((user) => user.room === room ) 



module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


