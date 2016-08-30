Prerequisites:
node & npm


Modules
Services
Commands
Directives


Main Headings

Installation: 
	Clone the repository from the bitbucket repository link.
	Switch to new_restructred_app branch using "git checkout origin/new_restructred_app" command.
	Pull down the entire code from remote new_restructred_app branch "git pull origin origin/new_restructred_app" 
	use "npm install --save"
	use "bower install --save"
	use "grunt serve" to runserver

Modules Used: The entire app is divided into two parts one is the Company side and other is the admin portal side. Here is the list of all the modules and directive used
	"client " Module : This is basically the admin section. Sorry for naming it incorrectly but i created this and then realized that it should be admin part. It contains the following two sub modules.
	"clientProfile" Module: Containing clientProfile section as given in the UI.
	"previewProfile" Module: Containing preview Profile section as given in the UI.

Company Part: All the modules which are related to company are created in the newTagApp folder.
	"analytics" Module: Analytics section 
	"budgetsPlanning" Module: Budgets and Planing section
	"events" Module: Events section
	"login" Module: The login module is common for both company and client. The difference is that when ever a company logs in successfully then a company_id is sent from backend and is saved in Local storage. So this is the way that both are differentiated.
	"products" Module: It contains information about the products which are to be shown. It has one sub module.
	"productConfiguration" sub module: It is used to configure the specific product associated with the selected event.
	"tasks" Module: It contains all the files associated with the tasks.
	"users" Module: It contains information about the users registered to that company and event.
	"vendors Module" : It contains the vendors section and has 3 sub modules.
	"addVendor" Sub Module: It contains the vendors tab content as given in UI.
	"plan" Sub Module: It contains information about the plans tab as given in UI.
	"addList" Sub Module: This is basically the Department section. Information about the all the departments are here.
	"directive": There are 2 directive's created in the directive directory.
	"navBar" Directive: It basically contains the navBar and Header Bar. There are 2 navbars, 1 for the client and other for admin. Both are toggled using "ng-if" in the "navBar.html" file. For more information please check line number 19 and 45 in the "navBar.html"
	"footerBar" Directive: It contains the footer tag.

Services Used: There are basically two types of services. 
	Global Services: These are those services which are common and are used by most of the modules that's why they are created in a service directory. They contain the general functions which are used frequently. 
	"authFactory" Service: It contains information related to the authentication of a user. All the details like companyID, userID, authenticationToken, login, logout etc are in this file only.
	"httpFactory" Service: It is basically used for making all the $http requests e.g put, delete. get, post etc.
	Local Services: These are the services which are used by one or two specific modules. Thus they are created inside that particular module in the service folder.
	"eventsFactory" Service
	"productsFactory" Service
	Modals Used: All the modals are created inside the partial sub directory of there corresponding modules. 
	How to Create Modules, Modals, Services, Directives, partial?: All these things are built using "generator-cg-angular" plugin of Yeoman. Please refer to this link https://github.com/cgross/generator-cg-angular for more information about how to generate the above. Also the modules, partials, directives, naming conventions should be made according to what described in this mail.

Note: Below are few points which are to be kept in mind while going through and writing down the code.
All the Routes of the modules are defined in the corresponding js files. 
Files which have "Main.html"  in last are the ones where the html part from the other html files will be loaded through ng-include. e.g check "eventsMain.html" in the events module.
Use of $scope directive is prohibited in the entire code. Use "this" pointer in the controller. e.g check "loginController" in "login.js" All the functions are accessed using login.functionName()

All the functions used in the controller are declared at the top and then used further.
Each and every controller has an "activate() function", this is basically used for some initial calling of functions or initialize data variables. Also the "activate() function" is defined at the top of all the functions.

All the variable names, function names are written in "CAMEL CASE" i.e first letter of first word small and first letter of coming words in capital. e.g loginUser.
Every module and sub modules has it's own .less file. All the CSS related to that particular file should be in the corresponding .less file. In case there is anything which is used by most of the files then you can write that in "app.less" file



For Node related error

Run

which node
and in my case it displayed /usr/sbin/node.
If it says command not found, skip to 3. Remove it by
sudo rm /usr/sbin/node
Run

which nodejs
in my case it displayed /usr/bin/nodejs.
Make a link

sudo ln -s /usr/bin/nodejs /usr/bin/node 
OR
sudo ln -s /usr/bin/nodejs /usr/sbin/node 

