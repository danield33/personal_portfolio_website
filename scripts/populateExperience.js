
/**
 * Populates the experience timeline in index.html
 */

const experienceItems = [
    {
        name: 'Dustie',
        description: 'Worked in a team of 5 people to create a multi-purposed discord bot capable of providing music, moderation, multimedia manipulation tools, games, and economy systems.',
        image: 'images/Dustie.png'
    },
    {
        name: 'Delaware County Auction',
        description: 'Created a mobile and desktop app to communicate realtime auction results to an audience.',
        image: 'images/Deleware-County-Auction.png'
    },
    {
        name: 'Rating Shift',
        description: 'A mobile app that lets you search, rate, and discover new apps to download',
        image: 'images/Rating-Shift.png'
    },
    {
        name: 'The Edge',
        description: 'A react native mobile app to help coaches manage their teams better',
        image: 'images/TheEdge.png'
    },

]

function populateExperience() {

    const $timelineItem = $('#timeline-item-template');


    for (let i = 0; i < experienceItems.length; i++) {
        const item = experienceItems[i];

        const clonedItem = $timelineItem.contents().clone();

        clonedItem.children(0).attr('class', 'fly-in ' + (i % 2 === 0 ? 'right' : 'left'));

        const $timeline = $('#timeline');
        const timelineItemTitle = clonedItem.find('#timeline-item-title');
        const timelineItemDescription = clonedItem.find('#timeline-item-description');
        const timelineItemImage = clonedItem.find('#timeline-item-image');

        timelineItemTitle.text(item.name);
        timelineItemDescription.text(item.description);
        timelineItemImage.attr('src', item.image);
        $timeline.append(clonedItem)
    }


}
// const $iconBars = ;
// $('#iconBars').append($('#iconBars').children('template').contents().clone());
populateExperience();

