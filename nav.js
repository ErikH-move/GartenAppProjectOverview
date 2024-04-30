document.addEventListener('DOMContentLoaded', function() {
    var navHtml = `
        <nav>
            <ul>
                <li><a href="index.html">Introduction</a></li>
                <li>
                                    <a href="#">Project Planning</a>
<ul>
             <li>   <a href="timeline.html">Timeline</a></li>             <li>   <a href="project_plan.html">Project Plan</a></li></ul>
                <li>
                    <a href="#">Project Steps</a>
                    <ul>
                        <li>
                            <a href="#">Literature Review</a>
                            <ul>
                                <li><a href="crop_rotation.html">Crop Rotation</a></li>
                                <li><a href="web_development_literature.html">Web Development</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Planning</a>
                            <ul>
                                <li><a href="data_structures.html">Data Structures</a></li>
                                <li><a href="mockup.html">Mockup</a></li>
                            </ul>

                        </li>
                    </ul>
                </li>
                <li><a href="sources.html">Sources</a></li>
            </ul>
        </nav>
    `;

    var header = document.querySelector('header'); // Select the <header> element
    header.insertAdjacentHTML('beforeend', navHtml); // Insert the navigation bar at the end of the <header>
});