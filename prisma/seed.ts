import { PrismaClient } from "@prisma/client";
let db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map(joke => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: "Road worker",
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`
    },
    {
      name: "Frisbee",
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`
    },
    {
      name: "Trees",
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`
    },
    {
      name: "Skeletons",
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`
    },
    {
      name: "Hippos",
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`
    },
    {
      name: "Dinner",
      content: `What did one plate say to the other plate? Dinner is on me!`
    },
    {
      name: "Elevator",
      content: `My first time using an elevator was an uplifting experience. The second time let me down.`
    },
    {
      name: "POTATO BAG STRENGTH",
      content: `An exercise for people who are out of shape: Begin with a five-pound potato bag in each hand. Extend your arms straight out from your sides, hold them there for...`
    },
    {
      name: "CAN’T COME TO CLASS",
      content: `My daughter received this e-mail from a prospective student prior to the start of the semester: “Dear Professor, I won’t be able to come to any of your classes or...`
    },
    {
      name: "MADE MY OWN GRANDKIDS",
      content: `Scene: With a patient in my medical exam room Me: How old are your kids? Patient: Forty-four and 39 from my wife who passed away, and from my second wife,...`
    },
    {
      name: "A TO A+",
      content: `The definition of a perfectionist: someone who wants to go from point A to point A+. David Bez`
    },
    {
      name: "FREE MAPS",
      content: `Traveling through the Midwest, I stopped at an Ohio welcome center to pick up a state map. I found plenty of brochures but no maps. Then I spotted two employees...`
    }
  ];
}
