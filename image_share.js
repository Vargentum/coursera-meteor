import {Images} from './data'


if (Meteor.isClient){
  Template.images.helpers({
    images: Images.find()
  })

  Template.images.events({
    'click .js-image': function({target}) {
      $(target).css('width', '50px')
    }
  })
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	})
}