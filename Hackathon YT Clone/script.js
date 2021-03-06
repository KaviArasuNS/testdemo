let CLIENT_ID = '997458920195-u0p0l369tc6iuh6c8tl69oj4b872pkan.apps.googleusercontent.com';

var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/reset"];

var SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');
var content = document.getElementById('content');
var channelForm = document.getElementById('channel-form');
var channelInput = document.getElementById('channel-input');
var videoContainer = document.getElementById('video-container');

var defaultChannel = 'techguyweb';


// Load auth2 library
function handleClientLoad(){
    gapi.load('client:auth2',initClient);
}

// Init API client library and set up sign in listners
function initClient(){
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientID: CLIENT_ID,
        scope: SCOPES
    }).then(()=>{
        // Listen for sign in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updataSigninStatus);
        // Handle initial sign in state
        updataSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

// Update UI sign in state changes
function updataSigninStatus(isSignedIn){
if(isSignedIn){
    authorizeButton.style.display= 'none';
    signoutButton.style.display= 'block';
    content.style.display= 'block';
    videoContainer.style.display= 'block';
    getChannel(defaultChannel);
} else {
    authorizeButton.style.display= 'block';
    signoutButton.style.display= 'none';
    content.style.display= 'none';
    videoContainer.style.display= 'none';
}
}

// Handle login
function handleAuthClick(){
    gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick(){
    gapi.auth2.getAuthInstance().signOut();
}


// Get channel from API
function getChannel(channel){
    console.log(channel);
}
