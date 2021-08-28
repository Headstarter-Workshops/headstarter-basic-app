// List of charities to dis

const charity = [
    {
        name : "Elizabeth Glaser Pediatric AIDS Foundation",
        type : "AIDS",
        rating : "A+",
        url : "www.pedaids.org"
    },
    {
        name : "Animal Welfare Institute",
        type : "Animal and Protection Charities",
        rating : "A+",
        url : "www.awionline.org"
    },
    {
        name : "Guide Dog Foundation for the Blind",
        type : "Blind & Visually Impaired Charities",
        rating : "A",
        url : "www.guidedog.org"
    },
    {
        name : "Cancer Research Institute",
        type : "Cancer Charities",
        rating : "A",
        url : "www.cancerresearch.org"
    },
    {
        name : "Children's Defense Fund",
        type : "Child Protection Charities",
        rating : "A",
        url : "www.pedaids.org"
    },
]

export default charity;




// Template code for drop down menu
// npm install react-native-select-dropdown
// import SelectDropdown from 'react-native-select-dropdown'
// ...
// const countries = ["Egypt", "Canada", "Australia", "Ireland"]
// ...
// <SelectDropdown
// 	data={countries}
// 	onSelect={(selectedItem, index) => {
// 		console.log(selectedItem, index)
// 	}}
// 	buttonTextAfterSelection={(selectedItem, index) => {
// 		// text represented after item is selected
// 		// if data array is an array of objects then return selectedItem.property to render after item is selected
// 		return selectedItem
// 	}}
// 	rowTextForSelection={(item, index) => {
// 		// text represented for each item in dropdown
// 		// if data array is an array of objects then return item.property to represent item in dropdown
// 		return item
// 	}}
// />