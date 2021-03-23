import {
    create, 
    readAll, 
    update, 
    remove,
    readOne
} from './notesControllers'

module.exports = (router) => {
	router
		.route('/notes')
        .post(create)
        .get(readAll)

        router
		.route('/notes/:id')
        .get(readOne)
        .delete(remove)
        .patch(update)
        
}