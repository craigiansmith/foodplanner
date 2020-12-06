<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Foodplanner</title>
        <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon">
        {% load static %}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <!-- Bulma Version 0.9.0-->
        <link rel="stylesheet" type="text/css" href="{% static 'css/newlanding.css' %}">
        <link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
    </head>
    <body>
        <section class="hero is-info is-medium is-bold">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <h1 class="title">Food planner</h1>
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <div class="tabs is-right">
                                    <ul>
                                        <li><a href="mailto:craig@tbvp.com.au">Contact</a></li>
                                    </ul>
                                    <span class="navbar-item">
                                        <a class="button is-white is-outlined" href="/register">
                                            <span class="icon">
                                                <i class="fa fa-angle-double-right"></i>
                                            </span>
                                            <span title="Register interest">Register</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Eat consciously for better health
                    </h1>
                    <h2 class="subtitle">
                        Gain all the nutritional knowledge that you need to be able to make informed decisions about your food intake.
                    </h2>
                    <a href="/register" class="button is-primary is-large">Register Interest</a>
                </div>
            </div>
        </section>
        <div class="box cta">
            <p class="has-text-centered">
                <span class="tag is-warning">Alpha</span> Currently the aim is to see who is interested in this service, register to let us know.
            </p>
        </div>
        <section class="container">
            <div class="columns features">
                <div class="column is-4">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-snowflake-o"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Learn about nutrient content.</h4>
                                <p>Foodplanner provides you reliable information about what nutrients are in a wide range of foods. By entering a recipe, or viewing one of ours you can see exactly what nutrients are in it.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-calculator"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Get feedback on your diet.</h4>
                                <p>Foodplanner will look at your weekly and daily mealplans and calculate if there are any shortfalls in daily recommended intake of nutrients for you and your family.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-thermometer-three-quarters"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4> Manage calorie and nutrient intake. </h4>
                                <p>You can easily see how many calories are in your mealplan using Foodplanner. We even make it simple to track those unexpected snacks.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns features">
                <div class="column is-4 is-offset-2 ">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-check-circle-o"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>Maintain your desired weight.</h4>
                                <p>By tracking  exactly how many calories you consume, Foodplanner is able to recommend approximately how much exercise you need to do to lose or maintain weight. We can even tell you if you're likely to put some on.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card is-shady">
                        <div class="card-image has-text-centered">
                            <i class="fa fa-heart"></i>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4> Safely switch to vegetarian. </h4>
                                <p>Because Foodplanner knows what nutrients are in different foods, we are able to help you make the switch to vegetarian without losing access to important minerals such as iron.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--div class="intro column is-8 is-offset-2">
                <h2 class="title">Perfect for developers or designers!</h2><br>
                <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
            </div>
            <div class="sandbox">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Hello World</p>
                            <p class="subtitle">What is up?</p>
                        </article>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Foo</p>
                            <p class="subtitle">Bar</p>
                        </article>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Third column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-white">
                                    <p class="title">Vertical tiles</p>
                                    <p class="subtitle">Top box</p>
                                </article>
                                <article class="tile is-child notification is-white">
                                    <p class="title">Vertical tiles</p>
                                    <p class="subtitle">Bottom box</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-white">
                                    <p class="title">Middle box</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="https://picsum.photos/640/480/?random" alt="Description">
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent is-shady">
                            <article class="tile is-child notification is-white">
                                <p class="title">Wide column</p>
                                <p class="subtitle">Aligned with the right column</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <div class="content">
                                <p class="title">Tall column</p>
                                <p class="subtitle">With even more content</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                                    eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                    <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                                    felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                    <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam
                                    ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Side column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent is-8 is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Main column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-8 is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Murphy's law</p>
                            <p class="subtitle">Anything that can go wrong will go wrong</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent is-shady">
                        <article class="tile is-child notification is-white">
                            <p class="title">Main column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div-->
        </section>
        <footer class="footer">
            <div class="container">
                <!--div class="columns">
                    <div class="column is-3 is-offset-2">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Vestibulum errato isse</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Aisia caisia</a></li>
                            <li><a href="#">Murphy's law</a></li>
                            <li><a href="#">Flimsy Lavenrock</a></li>
                            <li><a href="#">Maven Mousie Lavender</a></li>
                        </ul>
                    </div>
                    <div class="column is-3">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            <li><a href="#">Labore et dolore magna aliqua</a></li>
                            <li><a href="#">Kanban airis sum eschelor</a></li>
                            <li><a href="#">Modular modern free</a></li>
                            <li><a href="#">The king of clubs</a></li>
                            <li><a href="#">The Discovery Dissipation</a></li>
                            <li><a href="#">Course Correction</a></li>
                            <li><a href="#">Better Angels</a></li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            <li><a href="#">Objects in space</a></li>
                            <li><a href="#">Playing cards with coyote</a></li>
                            <li><a href="#">Goodbye Yellow Brick Road</a></li>
                            <li><a href="#">The Garden of Forking Paths</a></li>
                            <li><a href="#">Future Shock</a></li>
                        </ul>
                    </div>
                </div-->
                <div class="content has-text-centered">
                    <!--p>
                            <i class="fa fa-long-arrow-down"></i>
                    </p-->
                    <div class="control level-item">
                        <a href="http://web.tbvp.com.au">
                            <div class="tags has-addons">
                                <span class="tag is-dark">The Business Validation Project</span>
                                <span class="tag is-info">TBVP</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <script src="{% static 'js/functionality.js' %}"></script>
        </footer>
    </body>
</html>
