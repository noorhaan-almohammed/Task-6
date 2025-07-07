import type { Blog } from "../type/type";
export const blogs: Blog[] = [
  {
    id: 1,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/UX.jpg",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Migrating.jpg",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 3,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Building.jpg",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 4,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },

      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Interface"],
  },
  {
    id: 5,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Leadership", "Management", "Presentation"],
  },
  {
    id: 6,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/PM.jpg",
    summary:
      "Mental models are simple expressions of complex processes or relationships.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Product", "Research", "Frameworks"],
  },
  {
    id: 7,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Wireframing.jpg",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 8,
    title: "How collaboration makes us better designers",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/collaboration.jpg",
    summary:
      "Collaboration can make our teams stronger, and our individual designs better.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 9,
    title: "Our top 10 Javascript frameworks to use",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/frameworks.jpg",
    summary:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 10,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Podcast.jpg",
    summary:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Leadership", "Management", "Presentation"],
  },
  {
    id: 11,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Podcast.jpg",
    summary:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 12,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Podcast.jpg",
    summary:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Presentation"],
  },
  {
    id: 13,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Podcast.jpg",
    summary:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Presentation"],
  },
  {
    id: 14,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 15,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 16,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/PM.jpg",
    summary:
      "Mental models are simple expressions of complex processes or relationships.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 17,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Wireframing.jpg",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 18,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/UX.jpg",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 19,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Migrating.jpg",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 20,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Building.jpg",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 21,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa, sed atque distinctio nam quisquam necessitatibus assumenda, a animi tempora.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Frameworks"],
  },
  {
    id: 22,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum repellat velit reiciendis officiis nobis,",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 23,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Podcast.jpg",
    summary:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Presentation"],
  },
  {
    id: 24,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 25,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 26,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/PM.jpg",
    summary:
      "Mental models are simple expressions of complex processes or relationships.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 27,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Wireframing.jpg",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 28,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/UX.jpg",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 29,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Migrating.jpg",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 30,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Building.jpg",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 31,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa, sed atque distinctio nam quisquam necessitatibus assumenda, a animi tempora.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Frameworks"],
  },
  {
    id: 32,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum repellat velit reiciendis officiis nobis,",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 33,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/PM.jpg",
    summary:
      "Mental models are simple expressions of complex processes or relationships.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 34,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Wireframing.jpg",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 35,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/UX.jpg",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 36,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Migrating.jpg",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 37,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Building.jpg",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 38,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa, sed atque distinctio nam quisquam necessitatibus assumenda, a animi tempora.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Frameworks"],
  },
  {
    id: 39,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum repellat velit reiciendis officiis nobis,",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 40,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Wireframing.jpg",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 41,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/UX.jpg",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 42,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Migrating.jpg",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 43,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Building.jpg",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 44,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa, sed atque distinctio nam quisquam necessitatibus assumenda, a animi tempora.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Frameworks"],
  },
  {
    id: 45,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum repellat velit reiciendis officiis nobis,",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 46,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/PM.jpg",
    summary:
      "Mental models are simple expressions of complex processes or relationships.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 47,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Wireframing.jpg",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 48,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/UX.jpg",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 49,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Migrating.jpg",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Frameworks"],
  },
  {
    id: 50,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Building.jpg",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research"],
  },
  {
    id: 51,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa, sed atque distinctio nam quisquam necessitatibus assumenda, a animi tempora.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Frameworks"],
  },
  {
    id: 52,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum repellat velit reiciendis officiis nobis,",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
  {
    id: 53,
    title: "Grid system for better Design User Interface",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Grid.jpg",
    summary:
      "A grid system is a design tool used to arrange content on a webpage, making layouts more visually appealing and easier to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque facere odit ratione exercitationem eveniet voluptatibus harum autem fugiat ipsa, sed atque distinctio nam quisquam necessitatibus assumenda, a animi tempora.",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Research", "Frameworks"],
  },
  {
    id: 54,
    title: "Bill Walsh leadership lessons",
    date: "Sunday , 1 Jan 2023",
    author: "john Due",
    coverImage: "/blogs/Bill.jpg",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum repellat velit reiciendis officiis nobis,",
    intro:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    subtitle:
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    sections: [
      {
        image: "/blogs/common-grid.png",
        description:
          "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraph: [],
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              },
            ],
          },
          {
            content: [
              {
                type: "text",
                value:
                  "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Breaking Down the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              },
            ],
          },
          {
            def_Word: "Columns: ",
            content: [
              {
                type: "text",
                value:
                  "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              },
            ],
          },
          {
            def_Word: "Gutters: ",
            content: [
              {
                type: "text",
                value:
                  "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
              },
            ],
          },
        ],
      },
      {
        image: "/blogs/grid-part.png",
        description:
          "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        subtitle: "Examples of Grids in Use",

        paragraph: [
          {
            title: "Example 1: Hierarchical Grid",

            content: [
              { type: "text", value: "Our first example is from " },
              {
                type: "link",
                value: "The New York Times. ",
                href: "https://www.nytimes.com",
              },
              {
                type: "text",
                value:
                  "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              },
            ],
            image: "/blogs/newyork.png",
            description:
              "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 2: Column Grid",

            content: [
              { type: "text", value: "Our second example is from " },
              {
                type: "link",
                value: "Ritual.com",
                href: "https://www.ritual.com",
              },
              {
                type: "text",
                value:
                  " , a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              },
            ],
            image: "/blogs/four.png",
            description:
              "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 3: Modular Grid",

            content: [
              { type: "text", value: "Our third example is from " },
              {
                type: "link",
                value: "Behance",
                href: "https://www.behance.net/",
              },
              {
                type: "text",
                value:
                  "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              },
            ],
            image: "/blogs/behance.png",
            description:
              "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
          {
            title: "Example 4: Breaking the Grid",

            content: [
              { type: "text", value: "Our last example is " },
              {
                type: "link",
                value: "Shrine from Google’s Material Studies",
                href: "https://m2.material.io/design/material-studies/shrine.html#product-architecture",
              },
              {
                type: "text",
                value:
                  ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              },
            ],
            image: "/blogs/breaking.png",
            description:
              "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
          },
        ],
      },
      {
        subtitle: "Benefits of the Grid",
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Using a grid benefits both end users and the designers alike:",
              },
            ],
          },
          {
            type: "list",
            list_items: [
              {
                id: 1,
                text: [
                  {
                    type: "text",
                    value:
                      "Designers can quickly put together well-aligned interfaces.",
                  },
                ],
              },
              {
                id: 2,
                text: [
                  {
                    type: "text",
                    value:
                      "Users can easily scan predictable grid-based interfaces.",
                  },
                ],
              },
              {
                id: 3,
                text: [
                  {
                    type: "text",
                    value:
                      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of ",
                  },
                  {
                    type: "link",
                    value: "responsive web design",
                    href: "https://www.nngroup.com/articles/responsive-web-design-definition/",
                  },
                  {
                    type: "text",
                    value:
                      ". Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
         image: "/blogs/gutter.png",
        description:
          "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      
      },
      {
        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
              },
            ],
          },
        ],
      },
      {
        subtitle: "Choosing and Setting Up Your Grid",

        paragraph: [
          {
            content: [
              {
                type: "text",
                value:
                  "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              },
            ],
          },
          {
            def_Word: "Choose the right grid for your needs. ",
            content: [
              {
                type: "text",
                value:
                  "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              },
            ],
          },
          {
            def_Word: "Spend time setting up your grid. ",
            content: [
              {
                type: "text",
                value:
                  "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
              },
            ],
            
            image: "/blogs/column.png",
            description:
              "Easily set the number of columns, the gutter size, and margin size in Figma.",
          },
          {
            def_Word: "Always place content within columns, not gutters. ",
            content: [
              {
                type: "text",
                value:
                  "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
              },
            ],
            image: "/blogs/content-element.png",
            description:
              "Content or elements should be placed within and across columns, not gutters.",
          },
          {
            def_Word: "Consider using an 8px grid system. ",
            content: [
              {
                type: "text",
                value:
                  "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              },
            ],
          },
          {
            title: "Conclusion",
            content: [
              {
                type: "text",
                value:
                  "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
              },
            ],
          },
        ],
      },
    ],
    categories: ["Design", "Research", "Frameworks"],
  },
];
