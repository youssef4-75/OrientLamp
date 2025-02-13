const schools = [
    {
        image_source: "inpt.png",
        model_3d: "https://earth.google.com/web/search/inpt/@33.97988381,-6.866901,47.7361115a,0d,60y,34.41484187h,78.09400869t,0r/data=CnIaRBI-CiQweGRhNzZjYzMzNGE2NjYxMToweGVlOWVlNDM3YTBjZmJhZWEZoiLzbWb9QEAhZB75g4F3G8AqBGlucHQYASABIiYKJAnX9NOC0RZAQBHsqsGEYiwLwBnUDuVDDuBKQCGU0EEyY6RPwEICCAEiMAosQUYxUWlwTUlJSVN2aWF0bkgyajNqaDZJVHpXd05GaU5UYmx3VTB1Uy12LUIQBToDCgEwQgIIAEoNCP___________wEQAA",
        name: "INPT",
        description: "good school for innovation"
    },
    {
        image_source: "ensias.jpeg",
        model_3d: "https://earth.google.com/web/search/ensias/@33.98431178,-6.86760191,37.77355685a,0d,60y,4.13528002h,94.62980986t,0r/data=CnQaRhJACiQweGRhNzZjZTdmOTQ2MmRkMToweDJlOWMzOWNmYTFkOWU4ZDcZkAjX7f39QEAhM8rpoWx4G8AqBmVuc2lhcxgBIAEiJgokCRL6JgDX_UBAEfcJuakC_UBAGRYgR_gVcxvAIX9fCNdTfBvAQgIIASIwCixBRjFRaXBPM2lwX1IxUnJDcmlOYU9UNXJKWlVBX25oUlBLQnBYWFNYVEhfbRAFOgMKATBCAggASg0I____________ARAA",
        name: "ENSIAS",
        description: "something good to say"
    },
    {
        image_source: "assets/calendar-icon.jpg",
        model_3d: "https://earth.google.com/web/search/esi/@33.98234403,-6.865591,46.03439452a,0d,60y,267.14191391h,93.02608645t,0r/data=CiwiJgokCXRrRShT_kBAEXQhUrKo_UBAGWhT-PLRcxvAIdyITFAHfRvAQgIIASIwCixBRjFRaXBNOWNEOGprREdvZTBJTmtRSHdqdHFnNWRiOWExZnFCei1LU3BmRBAFOgMKATBCAggASg0I____________ARAA",
        name: "ESI",
        description: "something good to say"
    },
    {
        image_source: "assets/calendar-icon.jpg",
        model_3d: "",
        name: "INSEA",
        description: "something good to say"
    },
    {
        image_source: "assets/calendar-icon.jpg",
        model_3d: "",
        name: "EMI",
        description: "something good to say"
    },
    {
        image_source: "assets/calendar-icon.jpg",
        model_3d: "",
        name: "ENIM",
        description: "something good to say"
    },
    {
        image_source: "assets/calendar-icon.jpg",
        model_3d: "",
        name: "EHTP",
        description: "something good to say"
    },
]


function write(subSchools){
    const itemBars = document.querySelector(".item-grid");
    itemBars.innerHTML = "";
    subSchools.forEach(school => {
        itemBars.innerHTML += `
        <div class="item">
            <a href="${school.model_3d}" class="image-container">
                <img src="assets/schools/${school.image_source}" alt="Item 1">
            </a>
            <h3>${school.name}</h3>
            <p>${school.description}</p>
        </div>
        `;
    });
}

document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toUpperCase();

    const subSchools = schools.filter(school => {
        return school.name.toUpperCase().includes(filter);
    });

    write(subSchools);
});


write(schools);