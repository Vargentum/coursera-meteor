import {Images} from './data'


if (Meteor.isClient){
  Template.images.helpers({
    images: Images.find({}, {sort: {rating: -1}}) // no docs for this
  })

  Template.images.events({
    'click .js-image': function({target}) {
      $(target).css('width', '50px')
    },
    'click .js-del-img': function(ev) {
      const image_id = this._id // context is the Template (`image` in Images loop)
      $(`#${this._id}`).hide('slow', () => 
        Images.remove({_id: image_id}) 
      )
    },
    'click .js-rate-image': function(ev) {
      const rating = $(ev.currentTarget).data('userrating')
      const image_id = this.id // {{> module }} creates its own context
      Images.update({_id: image_id}, {$set: {rating}})

    }
  })
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	})
}