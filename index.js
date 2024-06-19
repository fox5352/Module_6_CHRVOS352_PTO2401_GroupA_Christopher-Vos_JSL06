// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menuData = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTMLconst
    const menuTag = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {

        // creates the menu category title
        const title = document.createElement("h3");
        title.textContent = category;
        menuTag.appendChild(title);


        // create list of each menu item in the catergory
        const list = document.createElement("ul");

        // creates all list items
        const listItems = menu[category].map(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item

            listItem.addEventListener("click", () => {
                addToOrder(item);
            });

            return listItem;
        });

        list.append(...listItems);

        // attach list items as a chuck to improver performance
        menuTag.appendChild(list);
    }
          
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderTag = document.getElementById('order-items');

    let listItems = orderTag.children;


    const newItem = document.createElement("li");
    newItem.textContent = itemName;

    // Create a list item for the order
    if (listItems.length > 0) {
        listItems = [...listItems, newItem];
    }else {
        listItems = [newItem];
    }


    orderTag.append(...listItems);

    let total = 60 * listItems.length;

    document.getElementById("order-total").textContent = total;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menuData);
