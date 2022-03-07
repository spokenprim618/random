var list1 = ["Create clones", "Mind control", "Higher jumps", "Speedforce", "Invisibility", "Accelerated learning", "One for all", "Trun onto a toad"];
var list2 = ["https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Naruto-Shadow-Clone-Jutsu-Rasengan-Naruto-Anime.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5", "https://www.gaia.com/wp-content/uploads/mind-control-e1550618957864-768x432.jpg", "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Jump_Fitness_Female_Leap-1296x728-Header.jpg?w=1155&h=1528", "http://pm1.narvii.com/6719/db9039680f1ae866031e4d2eac1cfe1ffd6e5777_00.jpg", "https://www.universityofcalifornia.edu/sites/default/files/uc-irvine-invisible-2.jpg", "https://m.media-amazon.com/images/I/51wgAWhK9VL.jpg", "https://static.wikia.nocookie.net/bokunoheroacademia/images/a/ab/Episode_49.png/revision/latest?cb=20180618214450","https://i.kym-cdn.com/entries/icons/original/000/038/726/coloneltoadheader.jpg"];
var list3=["The power to replicate yourself.", "Power to control the any actions of another person through your mind.", "Power to jump way higher than normal people.","The speedforce is an energy that bestows powers of super speed and reactions.", "Your whole body or parts of your body will not be visible.", "Power to learn any skill whether it be physical or mental faster through training or viewing.", "Power that is passed down. Any one can have One for All, it doesn't matter if they already have power or not. If they do have powers it can be transfered to the next holder along with super strength.", "You turn into a toad every Wednesday forever."];


onEvent("power_randomizer", "click", function( ) {
	var x = randomNumber(1, list1.length);
	setText("tezt_area", list1[(x - 1)]);
	setImageURL("rand_img", list2[(x-1)]);
});
onEvent("rand_desc", "click", function( ) {
    var x = randomNumber(1,list1.length);
  	setText("desc", list3[(x - 1)]);
   
  	setText("title", list1[(x - 1)]);

});


onEvent("home_button", "click", function( ) {
	setScreen("power_randomizer");
});
onEvent("button3", "click", function( ) {
	setScreen("home");
});
onEvent("info", "click", function( ) {
	setScreen("screen1");
});
onEvent("button5", "click", function( ) {
	setScreen("home");
});
