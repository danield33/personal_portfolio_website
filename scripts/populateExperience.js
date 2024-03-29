
/**
 * Populates the experience timeline in index.html
 */

const experienceItems = [
    {
        name: 'Dustie',
        description: 'Worked in a team of 5 people to create a multi-purposed discord bot capable of providing music, moderation, multimedia manipulation tools, games, and economy systems.',
        image: './images/dustie/Dustie.webp',
        scrollID: 'dustie'
    },
    {
        name: 'The Edge',
        description: 'Working with a team of developers and a product owner to create a react native mobile app to help coaches manage their teams better.',
        image: 'images/TheEdge.webp',
        scrollID: 'the-edge'
    },
    {
        name: 'Rating Shift',
        description: 'A mobile app that lets you search, rate, and discover new apps to download. This project won a top 5 in a national competition',
        image: 'images/Rating-Shift.png',
        scrollID: 'rating-shift'
    },

    {
        name: 'PandoraPVP',
        description: 'A minecraft server with custom plugins to develop a greek mythology theme. This garnered a large community that gave a lot of public' +
            ' communication and community engagement opportunities',
        image: 'images/PandoraPvPLogo.webp',
        scrollID: 'pandora-pvp'
    },
]

function populateExperience() {

    const $timelineItem = $('#timeline-item-template');


    for (let i = 0; i < experienceItems.length; i++) {
        const item = experienceItems[i];

        const clonedItem = $timelineItem.contents().clone();

        clonedItem.children(0).addClass((i % 2 === 0 ? 'right' : 'left'))

        const $timeline = $('#timeline');
        const timelineItemTitle = clonedItem.find('#timeline-item-title');
        const timelineItemDescription = clonedItem.find('#timeline-item-description');
        const timelineItemImage = clonedItem.find('#timeline-item-image');
        const anchorTag = clonedItem.find('a.btn');

        timelineItemTitle.text(item.name);
        timelineItemDescription.text(item.description);
        timelineItemImage.attr('src', item.image);
        anchorTag.attr('href', 'pages/portfolio/portfolio.html#'+item.scrollID)
        $timeline.append(clonedItem)
    }


}
// const $iconBars = ;
// $('#iconBars').append($('#iconBars').children('template').contents().clone());
populateExperience();

