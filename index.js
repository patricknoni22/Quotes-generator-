let quotes = [


"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do by <sub> Pelé</sub>",


"The way to get started is to quit talking and begin doing. <sub>Walt Disney</sub>",

"Success is not final, failure is not fatal: It is the courage to continue that counts by <sub>Winston Churchill</sub>",

"There are no shortcuts to any place worth going.<sub> Beverly Sills</sub>",

 "Don't watch the clock; do what it does. Keep going.<sub>Sam Levenson</sub>",

 "Education is the most powerful weapon which you can use to change the world. <sub> Nelson Mandela</sub>",

 "Live as if you were to die tomorrow. Learn as if you were to live forever. <sub> Mahatma Gandhi</sub>",

"An investment in knowledge pays the best interest.<sub>Benjamin Franklin</sub>",

"The beautiful thing about learning is nobody can take it away from you. <sub> B.B. King</sub>",

"Wisdom is not a product of schooling but of the lifelong attempt to acquire it.<sub>  Albert Einstein</sub>", 

"Believe you can and you're halfway there. <sub>  Theodore Roosevelt </sub>", 


 "Don’t let what you cannot do interfere with what you can do <sub>  John Wooden </sub>",


 "Strive not to be a success, but rather to be of value <sub>  Albert Einstein </sub>",


 "It always seems impossible until it's done  <sub>  Nelson Mandela </sub>",


 "Your time is limited, so don’t waste it living someone else’s life <sub> Steve Jobs</sub>",


 "Failure is simply the opportunity to begin again, this time more intelligently <sub>  Henry Ford</sub>",


 "The only limit to our realization of tomorrow will be our doubts of today <sub>  Franklin D. Roosevelt</sub>",


 "The best way out is always through  <sub> Robert Frost</sub>",


"What lies behind us and what lies before us are tiny matters compared to what lies within us <sub> Ralph Waldo Emerson</sub>",


 "Fall seven times, stand up eight <sub> Japanese Proverb</sub>",

 "Success usually comes to those who are too busy to be looking for it <sub>  Henry David Thoreau</sub>",


 "I find that the harder I work, the more luck I seem to have <sub> Thomas Jefferson</sub>",


 "Never confuse activity with accomplishment <sub>  John Wooden</sub>",


 "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. <sub> Buddha</sub>",


 "The secret of getting ahead is getting started <sub>  Mark Twain</sub>",

 "Shoot for the moon. Even if you miss, you’ll land among the stars <sub> Norman Vincent Peale</sub>",

 "If you can dream it, you can do it <sub>  Walt Disney</sub>",


 "Go confidently in the direction of your dreams. Live the life you have imagined.<sub> Henry David Thoreau</sub>",


"What you get by achieving your goals is not as important as what you become by achieving your goals. <sub> Zig Ziglar</sub>",

 "Dream big and dare to fail <sub>  Norman Vaughan</sub>",


"Hardships often prepare ordinary people for an extraordinary destiny. <sub>  C.S. Lewis</sub>",


 "Do what you can, with what you have, where you are. <sub> Theodore Roosevelt</sub>",


"Challenges are what make life interesting. Overcoming them is what makes life meaningful. <sub> Joshua J. Marine</sub>",


 "Turn your wounds into wisdom. <sub> Oprah Winfrey</sub>",


 "In the middle of every difficulty lies opportunity.<sub> Albert Einstein</sub>",

"Be the change that you wish to see in the world.<sub>  Mahatma Gandhi</sub>",


 "Life isn’t about finding yourself. Life is about creating yourself. <sub> George Bernard Shaw</sub>",


 "We do not learn from experience... we learn from reflecting on experience. <sub> John Dewey</sub>",


"Change is the end result of all true learning. <sub> Leo Buscaglia</sub>",


 "The only way to make sense out of change is to plunge into it, move with it, and join the dance. <sub>  Alan Watts</sub>",

 "You are never too old to set another goal or to dream a new dream. <sub> C.S. Lewis</sub>",


 "No one can make you feel inferior without your consent. <sub> Eleanor Roosevelt</sub>",


 "The future belongs to those who believe in the beauty of their dreams.<sub>  Eleanor Roosevelt</sub>",


 "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. <sub> Christian D. Larson</sub>",


 "Confidence comes not from always being right but from not fearing to be wrong.<sub> Peter T. McIntyre</sub>",


 "Leadership is not about being in charge. It is about taking care of those in your charge. <sub>  Simon Sinek</sub>",


 "Innovation distinguishes between a leader and a follower. <sub>  Steve Jobs</sub>",


 "A leader is one who knows the way, goes the way, and shows the way. <sub>  John C. Maxwell</sub>",


 "The function of leadership is to produce more leaders, not more followers. <sub>  Ralph Nader</sub>",


 "The best way to predict the future is to create it. <sub> Peter Drucker</sub>",

 ];

document.getElementById("generate-quotes").addEventListener('click', generateQuote); 

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("display-quote").innerHTML= randomQuote;

}


document.getElementById("clearQuote").onclick = function(){
    document.getElementById("display-quote").textContent = " ";
}







