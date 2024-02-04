function shout(string) {
    // todo
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
function logShout(string) {
    // todo
}
"Hello!".toUpperCase(); // 'Hello!'
function logShout(string) {
    console.log(string.toUpperCase());
}

  function whisper(string) {
    // todo
  }

  "Hello!".toLowerCase(); // 'hello!'
  function whisper(string) {
    return string.toLowerCase();
  }

  function logWhisper(string) {
    // todo
  }
"Hello!".toLowerCase(); // 'hello!'
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    // todo
}
"Hello!".shout(); // 'LET'S HAVE DINNER TOGETHER!'
function sayHiToHeadphonedRoommate(string) {
    return string.toUpperCase();
  }
  
  console.log(sayHiToHeadphonedRoommate("Hello!")); // 'HELLO!'

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string.toLowerCase() === "let's have dinner together!") {
      return "I would love to!";
    } else {
      return string.toUpperCase();
    }
  }
  
  console.log(sayHiToHeadphonedRoommate("Hello!")); // 'HELLO!'
  console.log(sayHiToHeadphonedRoommate("hello!")); // 'I can't hear you!'
  console.log(sayHiToHeadphonedRoommate("HELLO!")); // 'YES INDEED!'
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // 'I would love to!'
