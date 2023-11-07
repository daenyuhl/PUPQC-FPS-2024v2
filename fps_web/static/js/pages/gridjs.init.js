document.getElementById("table-gridjs") &&
    new gridjs.Grid({
        columns: [
            {
                name: "No.",
                width: "80px",
                formatter: function (e) {
                    return gridjs.html('<span class="fw-semibold">' + e + "</span>");
                },
            },
            { name: "Training or Seminar", width: "510px" },
            {
                name: "Date",
                width: "200px",
                //formatter: function (e) {
                //    return gridjs.html('<a href="">' + e + "</a>");
                //},
            },
            { name: "Time", width: "150px" },
            { name: "Duration", width: "180px" },
            { name: "Location", width: "230px" },
            {
                name: "Actions",
                width: "150px",
                formatter: function (e) {
                    return gridjs.html(
                        //"<a href='#' class='text-reset text-decoration-underline'>Details</a>"
                        `
                        <center>
                            <button type="button" class="btn btn-sm btn-primary">Attendees</button>
                        </center>
                        `
                    );
                },
            },
        ],
        pagination: { limit: 5 },
        sort: !0,
        search: !0,
        data: [
            [
                "01",
                "Cybersecurity Awareness",
                "January 13, 2023",
                "3:00 - 4:30 PM",
                "3 Days",
                "PUPQC - Gymnasium",
            ],
            [
                "02",
                "Philosophical Approaches",
                "February 23, 2023",
                "7:00 - 11:30 PM",
                "1 Day",
                "PUPQC - Gymnasium",
            ],
            [
                "03",
                "Teaching Effectivity and Essence",
                "March 16, 2023",
                "1:00 - 4:30 PM",
                "1 Day",
                "PUPQC - AVR",
            ],
        ],
    }).render(document.getElementById("table-gridjs")),
    document.getElementById("table-card") &&
    new gridjs.Grid({
        columns: [
            { name: "Name", width: "150px" },
            { name: "Email", width: "250px" },
            { name: "Position", width: "250px" },
            { name: "Company", width: "250px" },
            { name: "Country", width: "150px" },
        ],
        sort: !0,
        pagination: { limit: 5 },
        data: [
            [
                "Jonathan",
                "jonathan@example.com",
                "Senior Implementation Architect",
                "Hauck Inc",
                "Holy See",
            ],
            [
                "Harold",
                "harold@example.com",
                "Forward Creative Coordinator",
                "Metz Inc",
                "Iran",
            ],
            [
                "Shannon",
                "shannon@example.com",
                "Legacy Functionality Associate",
                "Zemlak Group",
                "South Georgia",
            ],
            [
                "Robert",
                "robert@example.com",
                "Product Accounts Technician",
                "Hoeger",
                "San Marino",
            ],
            [
                "Noel",
                "noel@example.com",
                "Customer Data Director",
                "Howell - Rippin",
                "Germany",
            ],
            [
                "Traci",
                "traci@example.com",
                "Corporate Identity Director",
                "Koelpin - Goldner",
                "Vanuatu",
            ],
            [
                "Kerry",
                "kerry@example.com",
                "Lead Applications Associate",
                "Feeney, Langworth and Tremblay",
                "Niger",
            ],
            [
                "Patsy",
                "patsy@example.com",
                "Dynamic Assurance Director",
                "Streich Group",
                "Niue",
            ],
            [
                "Cathy",
                "cathy@example.com",
                "Customer Data Director",
                "Ebert, Schamberger and Johnston",
                "Mexico",
            ],
            [
                "Tyrone",
                "tyrone@example.com",
                "Senior Response Liaison",
                "Raynor, Rolfson and Daugherty",
                "Qatar",
            ],
        ],
    }).render(document.getElementById("table-card")),
    document.getElementById("table-pagination") &&
    new gridjs.Grid({
        columns: [
            {
                name: "ID",
                width: "120px",
                formatter: function (e) {
                    return gridjs.html('<a href="" class="fw-medium">' + e + "</a>");
                },
            },
            { name: "Name", width: "150px" },
            { name: "Date", width: "180px" },
            { name: "Total", width: "120px" },
            { name: "Status", width: "120px" },
            {
                name: "Actions",
                width: "100px",
                formatter: function (e) {
                    return gridjs.html(
                        "<button type='button' class='btn btn-sm btn-light'>Details</button>"
                    );
                },
            },
        ],
        pagination: { limit: 5 },
        data: [
            ["#VL2111", "Jonathan", "07 Oct, 2021", "$24.05", "Paid"],
            ["#VL2110", "Harold", "07 Oct, 2021", "$26.15", "Paid"],
            ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
            ["#VL2108", "Robert", "05 Oct, 2021", "$25.03", "Paid"],
            ["#VL2107", "Noel", "05 Oct, 2021", "$22.61", "Paid"],
            ["#VL2106", "Traci", "04 Oct, 2021", "$24.05", "Paid"],
            ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
            ["#VL2104", "Patsy", "04 Oct, 2021", "$21.25", "Refund"],
            ["#VL2103", "Cathy", "03 Oct, 2021", "$22.61", "Paid"],
            ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"],
        ],
    }).render(document.getElementById("table-pagination")),
    document.getElementById("table-search") &&
    new gridjs.Grid({
        columns: [
            { name: "Name", width: "150px" },
            { name: "Email", width: "250px" },
            { name: "Position", width: "250px" },
            { name: "Company", width: "250px" },
            { name: "Country", width: "150px" },
        ],
        pagination: { limit: 5 },
        search: !0,
        data: [
            [
                "Jonathan",
                "jonathan@example.com",
                "Senior Implementation Architect",
                "Hauck Inc",
                "Holy See",
            ],
            [
                "Harold",
                "harold@example.com",
                "Forward Creative Coordinator",
                "Metz Inc",
                "Iran",
            ],
            [
                "Shannon",
                "shannon@example.com",
                "Legacy Functionality Associate",
                "Zemlak Group",
                "South Georgia",
            ],
            [
                "Robert",
                "robert@example.com",
                "Product Accounts Technician",
                "Hoeger",
                "San Marino",
            ],
            [
                "Noel",
                "noel@example.com",
                "Customer Data Director",
                "Howell - Rippin",
                "Germany",
            ],
            [
                "Traci",
                "traci@example.com",
                "Corporate Identity Director",
                "Koelpin - Goldner",
                "Vanuatu",
            ],
            [
                "Kerry",
                "kerry@example.com",
                "Lead Applications Associate",
                "Feeney, Langworth and Tremblay",
                "Niger",
            ],
            [
                "Patsy",
                "patsy@example.com",
                "Dynamic Assurance Director",
                "Streich Group",
                "Niue",
            ],
            [
                "Cathy",
                "cathy@example.com",
                "Customer Data Director",
                "Ebert, Schamberger and Johnston",
                "Mexico",
            ],
            [
                "Tyrone",
                "tyrone@example.com",
                "Senior Response Liaison",
                "Raynor, Rolfson and Daugherty",
                "Qatar",
            ],
        ],
    }).render(document.getElementById("table-search")),
    document.getElementById("table-sorting") &&
    new gridjs.Grid({
        columns: [
            { name: "Name", width: "150px" },
            { name: "Email", width: "250px" },
            { name: "Position", width: "250px" },
            { name: "Company", width: "250px" },
            { name: "Country", width: "150px" },
        ],
        pagination: { limit: 5 },
        sort: !0,
        data: [
            [
                "Jonathan",
                "jonathan@example.com",
                "Senior Implementation Architect",
                "Hauck Inc",
                "Holy See",
            ],
            [
                "Harold",
                "harold@example.com",
                "Forward Creative Coordinator",
                "Metz Inc",
                "Iran",
            ],
            [
                "Shannon",
                "shannon@example.com",
                "Legacy Functionality Associate",
                "Zemlak Group",
                "South Georgia",
            ],
            [
                "Robert",
                "robert@example.com",
                "Product Accounts Technician",
                "Hoeger",
                "San Marino",
            ],
            [
                "Noel",
                "noel@example.com",
                "Customer Data Director",
                "Howell - Rippin",
                "Germany",
            ],
            [
                "Traci",
                "traci@example.com",
                "Corporate Identity Director",
                "Koelpin - Goldner",
                "Vanuatu",
            ],
            [
                "Kerry",
                "kerry@example.com",
                "Lead Applications Associate",
                "Feeney, Langworth and Tremblay",
                "Niger",
            ],
            [
                "Patsy",
                "patsy@example.com",
                "Dynamic Assurance Director",
                "Streich Group",
                "Niue",
            ],
            [
                "Cathy",
                "cathy@example.com",
                "Customer Data Director",
                "Ebert, Schamberger and Johnston",
                "Mexico",
            ],
            [
                "Tyrone",
                "tyrone@example.com",
                "Senior Response Liaison",
                "Raynor, Rolfson and Daugherty",
                "Qatar",
            ],
        ],
    }).render(document.getElementById("table-sorting")),
    document.getElementById("table-loading-state") &&
    new gridjs.Grid({
        columns: [
            { name: "Name", width: "150px" },
            { name: "Email", width: "250px" },
            { name: "Position", width: "250px" },
            { name: "Company", width: "250px" },
            { name: "Country", width: "150px" },
        ],
        pagination: { limit: 5 },
        sort: !0,
        data: function () {
            return new Promise(function (e) {
                setTimeout(function () {
                    e([
                        [
                            "Jonathan",
                            "jonathan@example.com",
                            "Senior Implementation Architect",
                            "Hauck Inc",
                            "Holy See",
                        ],
                        [
                            "Harold",
                            "harold@example.com",
                            "Forward Creative Coordinator",
                            "Metz Inc",
                            "Iran",
                        ],
                        [
                            "Shannon",
                            "shannon@example.com",
                            "Legacy Functionality Associate",
                            "Zemlak Group",
                            "South Georgia",
                        ],
                        [
                            "Robert",
                            "robert@example.com",
                            "Product Accounts Technician",
                            "Hoeger",
                            "San Marino",
                        ],
                        [
                            "Noel",
                            "noel@example.com",
                            "Customer Data Director",
                            "Howell - Rippin",
                            "Germany",
                        ],
                        [
                            "Traci",
                            "traci@example.com",
                            "Corporate Identity Director",
                            "Koelpin - Goldner",
                            "Vanuatu",
                        ],
                        [
                            "Kerry",
                            "kerry@example.com",
                            "Lead Applications Associate",
                            "Feeney, Langworth and Tremblay",
                            "Niger",
                        ],
                        [
                            "Patsy",
                            "patsy@example.com",
                            "Dynamic Assurance Director",
                            "Streich Group",
                            "Niue",
                        ],
                        [
                            "Cathy",
                            "cathy@example.com",
                            "Customer Data Director",
                            "Ebert, Schamberger and Johnston",
                            "Mexico",
                        ],
                        [
                            "Tyrone",
                            "tyrone@example.com",
                            "Senior Response Liaison",
                            "Raynor, Rolfson and Daugherty",
                            "Qatar",
                        ],
                    ]);
                }, 2e3);
            });
        },
    }).render(document.getElementById("table-loading-state")),
    document.getElementById("table-fixed-header") &&
    new gridjs.Grid({
        columns: [
            { name: "Name", width: "150px" },
            { name: "Email", width: "250px" },
            { name: "Position", width: "250px" },
            { name: "Company", width: "250px" },
            { name: "Country", width: "150px" },
        ],
        sort: !0,
        pagination: !0,
        fixedHeader: !0,
        height: "400px",
        data: [
            [
                "Jonathan",
                "jonathan@example.com",
                "Senior Implementation Architect",
                "Hauck Inc",
                "Holy See",
            ],
            [
                "Harold",
                "harold@example.com",
                "Forward Creative Coordinator",
                "Metz Inc",
                "Iran",
            ],
            [
                "Shannon",
                "shannon@example.com",
                "Legacy Functionality Associate",
                "Zemlak Group",
                "South Georgia",
            ],
            [
                "Robert",
                "robert@example.com",
                "Product Accounts Technician",
                "Hoeger",
                "San Marino",
            ],
            [
                "Noel",
                "noel@example.com",
                "Customer Data Director",
                "Howell - Rippin",
                "Germany",
            ],
            [
                "Traci",
                "traci@example.com",
                "Corporate Identity Director",
                "Koelpin - Goldner",
                "Vanuatu",
            ],
            [
                "Kerry",
                "kerry@example.com",
                "Lead Applications Associate",
                "Feeney, Langworth and Tremblay",
                "Niger",
            ],
            [
                "Patsy",
                "patsy@example.com",
                "Dynamic Assurance Director",
                "Streich Group",
                "Niue",
            ],
            [
                "Cathy",
                "cathy@example.com",
                "Customer Data Director",
                "Ebert, Schamberger and Johnston",
                "Mexico",
            ],
            [
                "Tyrone",
                "tyrone@example.com",
                "Senior Response Liaison",
                "Raynor, Rolfson and Daugherty",
                "Qatar",
            ],
        ],
    }).render(document.getElementById("table-fixed-header")),
    document.getElementById("table-hidden-column") &&
    new gridjs.Grid({
        columns: [
            { name: "Name", width: "120px" },
            { name: "Email", width: "250px" },
            { name: "Position", width: "250px" },
            { name: "Company", width: "250px" },
            { name: "Country", hidden: !0 },
        ],
        pagination: { limit: 5 },
        sort: !0,
        data: [
            [
                "Jonathan",
                "jonathan@example.com",
                "Senior Implementation Architect",
                "Hauck Inc",
                "Holy See",
            ],
            [
                "Harold",
                "harold@example.com",
                "Forward Creative Coordinator",
                "Metz Inc",
                "Iran",
            ],
            [
                "Shannon",
                "shannon@example.com",
                "Legacy Functionality Associate",
                "Zemlak Group",
                "South Georgia",
            ],
            [
                "Robert",
                "robert@example.com",
                "Product Accounts Technician",
                "Hoeger",
                "San Marino",
            ],
            [
                "Noel",
                "noel@example.com",
                "Customer Data Director",
                "Howell - Rippin",
                "Germany",
            ],
            [
                "Traci",
                "traci@example.com",
                "Corporate Identity Director",
                "Koelpin - Goldner",
                "Vanuatu",
            ],
            [
                "Kerry",
                "kerry@example.com",
                "Lead Applications Associate",
                "Feeney, Langworth and Tremblay",
                "Niger",
            ],
            [
                "Patsy",
                "patsy@example.com",
                "Dynamic Assurance Director",
                "Streich Group",
                "Niue",
            ],
            [
                "Cathy",
                "cathy@example.com",
                "Customer Data Director",
                "Ebert, Schamberger and Johnston",
                "Mexico",
            ],
            [
                "Tyrone",
                "tyrone@example.com",
                "Senior Response Liaison",
                "Raynor, Rolfson and Daugherty",
                "Qatar",
            ],
        ],
    }).render(document.getElementById("table-hidden-column"));
