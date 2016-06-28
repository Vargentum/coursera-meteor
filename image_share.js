if (Meteor.isClient){
  var imgData = {
    images: [{
      src: 'icon-dark.jpg',
      alt: 'image with dark background'
    },
    {
      src: 'icon-white.jpg',
      alt: 'image with white background'
    }]
  }

  Template.images.helpers(imgData)

  Template.images.events({
    'click .js-image': function(ev) {
      console.log(ev)
      $(ev.target).css('width', '50px')
    }
  })
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	})
}