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
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	})
}