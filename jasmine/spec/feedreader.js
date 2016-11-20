/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is our second test - it loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('checks if the feeds has a valid URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
         });


        /* This is our third test - it loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('checks if the feeds has a valid Name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            });
         });
    });

    /* This is our second test suite named "The menu" */
    describe('The menu', function() {
        /* This is our fourth test - it ensures the menu element is
         * hidden by default.
         */
         it('checks if menu element is hidden by default', function() {
            expect($('body.menu-hidden').length).toEqual(1);
         });

         /* This is our fifth test - it ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('checks if the menu visibility changes when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body.menu-hidden').length).toEqual(0);
            $('.menu-icon-link').click();
            expect($('body.menu-hidden').length).toEqual(1);
          });
    });

    /* This is our third test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This is our sixth test - it ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('checks if at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
    });

    /* This is our fourth test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This is our seventh test - it ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var initialhtml;
        beforeEach(function(done) {
            loadFeed(1, function() {
                initialhtml = $('.feed').html();
                loadFeed(0, function() {
                    done();
                });
            });
        });

        it('checks if the content changes when a new feed is loaded', function() {
            expect($('.feed').html()).not.toBe(initialhtml);
        });
    });
}());
