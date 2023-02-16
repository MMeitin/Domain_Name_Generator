var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extensions = [".com", ".es"];

pronoun.forEach(x => {
  adj.forEach(z => {
    noun.forEach(y => {
      extensions.forEach(t => {
        console.log(x + z + y + t);
      });
    });
  });
});
