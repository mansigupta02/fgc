
    describe('Testing Menus',()=>{

        beforeEach(function () {
            document.body.innerHTML = __html__['index.html'];
        });

        afterEach(function () {
            document.body.innerHTML = "";
        });

		it('Check there is header with message "Inventory Managment System" in <h1>', function() {

			var str = document.body.innerHTML;
			st=str.trim();
			str=str.toLowerCase();
            expect(str).toContain("inventory management system</h1>");
         
        });


		it('Check there is two horizontal ruler in the layout.', function() {
			
			expect(document.getElementById('rule1')).toBeDefined();
			expect(document.getElementById('rule2')).toBeDefined();
         
        });


		it('Check there is an array of <a> tag exist, and the target for first <a> is "page1.html"', function() {
			
			var x = document.getElementById("menu1");
			var y = x.getAttribute("href");
			y=y.trim();
			y=y.toLowerCase();
			expect(y).toContain("page1.html");
         
        });


		it('Check there is an array of <a> tag exist, and the target for first <a> is "page2.html"', function() {
			
			var x = document.getElementById("menu2");
			var y = x.getAttribute("href");
			y=y.trim();
			y=y.toLowerCase();
			expect(y).toContain("page2.html");
         
        });


		it('Check there is an array of <a> tag exist, and the target for first <a> is "page3.html"', function() {
			
			var x = document.getElementById("menu3");
			var y = x.getAttribute("href");
			y=y.trim();
			y=y.toLowerCase();
			expect(y).toContain("page3.html");
         
        });


		it('Check there is a message "(c) My App 2019-20." in <h4>', function() {

			var str = document.body.innerHTML;
			str=str.trim();
			str=str.toLowerCase();
            expect(str).toContain("my app 2019-20.</h4>");
         
        });
      
    });
