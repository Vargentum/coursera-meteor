import {Images} from './data'


if (Meteor.isClient){
  Template.images.helpers({
    images: Images.find()
  })

  Template.images.events({
    'click .js-image': function({target}) {
      $(target).css('width', '50px')
    },
    'click .js-del-img': function(ev) {
      $(`#${this._id}`).hide('slow', () => 
        Images.remove({_id: this._id}) // this refers to Template data (model ?)
      )
    }
  })
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	})
}