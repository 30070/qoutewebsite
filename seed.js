const mongoose=require('mongoose');
const New_Quote=require('./models/New_Quote')

const quotes=[
    {
        name:"Madara Uchiha",
        desc:"Wake up to reality. Nothing ever goes as planned in this world.the only things that truly exist in the reality are merely pain suffering and futility... "
    },
    {
        name:"Leonardo DiCaprio",
        desc:"You can change what you do,But you can't change what you want."
    },
    {
        name:"Michael Emerson",
        desc:"Once we become predictable,We become vulnerable"
    },
    {
        name:"Master Jiraiya",
        desc:"It's not how you live... It's how you die."
    },
    {
        name:"Obito Uchiha",
        desc:"Victors are those that look and plan ahead."
    },
    {
        name:"Cillian Murphy",
        desc:"For those who make the rules,there are no rules. "
    },
    {
        name:"Madara Uchiha",
        desc:"Thinking of peace whilst spilling blood is something that only humans could do. "
    },

]

async function seedDB(){
    await New_Quote.insertMany(quotes);
    console.log("Data seeded successfully");
}
module.exports=seedDB;