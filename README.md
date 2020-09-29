# scheduler-vue-ui

Web UI build with Nuxt.js based on Vue.js to provide a frontend for a prototype scheduling application API

## Build Setup

Preferred method to test, develop and/or deploy project is through NPM.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

If running on Windows, it is suggested to perform any of these actions through administrative command prompt or PowerShell

The following is also highly suggested for developers on Windows.

```bash
# install Windows development packages
$ npm install --global windows-build-tools
```

Finally, there may be an issue with CORS policy while testing the app in local system. In most cases this can be circumvented by using a CORS plugin on the browser, however not all.

The following solution was enough when using Chrome:

```bash
# Append in shortcut or command line call, ignore error for folder
 --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

## Implementation

Implementation of scheduling project frontend requirements has been completed as follows:

> Skills

- [x] Show a collection of the available skills required for any job in the company.
- [x] Navigate to a specific skill's page.
- [x] View an existing skill's details
- [x] View the skill's name and the date of its creation.
- [x] Update the skill's details.
- [x] Delete the skill.
- [x] Create a new skill with a form with the skill's name and a description.

---

> Employees

- [x] Show a collection of the available employees.
- [x] Navigate to a specific employee's page.
- [x] Order employees by their surnames with either an ascending or descending order.
- [x] Order employees by their hiring date with either an ascending or descending order. (optional)
- [ ] Delete multiple employees (optional).[^1]
- [x] Search for employees using their name and/or surname (optional).[^2]
- [x] View the employee's personal details.
- [x] View the employee's skillset.
- [ ] Add an skill to the employee's skillset.[^1]
- [x] Delete an assigned skill from the employee's skillset.
- [x] Delete the employee.
- [x] View details like when the employee's latest skillset change occurred.
- [x] Fill an employee form with personal details and create a new employee.
- [ ] Assign existing skills to the new employee as part of the creation form.[^3]
- [ ] Assign non-existing skills as part of the employee creation (optional).[^3]

---

> Extra Features

- [x] Filter employees by skills. (implemented but visible from skill page)
- [x] Employee details audit logs. (available on employee page)
- [x] Responsive design for mobile and tablet devices. (with BootstrapVue)
- [ ] Export employee or skills data to spreadsheets. (simple to complete) [^4]

## Future Improvements

- Implement existing functionality available by API, or when API updates.
- Investigate potential improvements to client-side validations.
- Handle in a user-friendly and appropriate manner errors/problems with API calls.
- Utilise Vue Components for reusable views (e.g., create/edit forms, search/browse table).
- Thoroughly test as both user and developer UI behaviour with Nuxt.js compatible testing frameworks.

[^1]: API - Call exists, not yet implemented in UI.
[^2]: UI - Works manually (`/employees/search?by=name&q=John`), but UI form currently fails to forward update parameters.
[^3]: API - Call not yet implemented, would be a non-default POST request.
[^4]: UI - XLSX library installed, creation by table/JSON data, features calls to browser to trigger local file download.
