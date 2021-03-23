import Notes from './notesModel'

// Create
const createNotes = async (title,description) => {
    // Create an user object
    let note = new Notes({
        title: title,
        description: description
    })
   return await note.save()
   
}

const viewNote = async (id)=> {
    const noteData = await Notes.findById(id.toString())
    return noteData
    // Notes.findById(id.toString())
    // .then((result) => {
    //     if(!result){
    //         return 'No Notes'
    //     }
    //     return result
    // }).catch((err) => {
    //     throw new Error(err)
    // });
}

const viewAllNotes = async (limit)=> {
    const options = {
        page: 1,
        limit: limit,
        sort:'-createdAt'
      };
    const notesData = await Notes.paginate({},options,(err,result)=>{
        if (err){
            throw new Error(err)
        }
        return result
    })
    return notesData
}

const updateNote =  async(id,notesData)=>{
    const updateData = await Notes.findByIdAndUpdate(id,notesData)
    
}



const removeNotes = async (id)=> {

    return await Notes.findByIdAndRemove(id)
    
}
module.exports =  {createNotes, viewNote, viewAllNotes, updateNote, removeNotes};