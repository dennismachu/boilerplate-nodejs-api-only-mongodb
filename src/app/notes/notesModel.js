import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const notesSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required. - Insert a title'],
            minlength:[3,'Minimun title length 3 characters']
        },
        description: {
            type: String,
        },
    },
    {
		timestamps: true,
	}
);

notesSchema.plugin(mongoosePaginate);

const notes = mongoose.model('note', notesSchema, 'notes');

export default notes;