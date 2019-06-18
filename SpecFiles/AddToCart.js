/*Add to Cart Very good example to show how Element.all
and chain locators can be used for fetching the elements
 */
describe('Add to Cart', function() {
	it('should add one and two', function() {
		function AddToCart(phoneModel) {
			element.all(by.tagName('app-card')).each(function(cards) {
				cards.element(by.css('h4 a')).getText().then(function(text) {
					console.log(text);
					if (text == phoneModel) {
						cards.element(by.tagName('button')).click();
					}
				});

			});
		}
		browser.get('https://qaclickacademy.github.io/protocommerce');
		element(by.linkText("Shop")).click();
		AddToCart("iphone X");
		AddToCart("Samsung Note 8");
		AddToCart("Nokia Edge");
		AddToCart("Blackberry");
		element(by.css("#navbarResponsive  ul  li  a")).getText().then(
				function(text) {
					browser.sleep(2000);
					console.log(text);
					expect(text.split("(")[1].trim().charAt(0)).toBe('4')
				});
	});
});