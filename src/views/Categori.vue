<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" style="font-weight: 700" href="#">mealapp</a>
                </li>
            </ul>
            <span> 
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" style="color: #696969; font-weight: 400" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" style="color: #696969; font-weight: 400" href="#">Foods</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" style="color: #696969; font-weight: 400" href="#">Ingredients</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" style="color: #696969; font-weight: 400" href="#">Local Culinary</a>
                </li>
            </ul>
            </span>
        </div>
    </nav>
</div>

<div style="background-color: #F5FFFA">
    <div class="container-fluid p-5">   
        <div class="text-center">
        <p style="color: #696969; font-weight: 600; font-size: 15px">mealapp API website</p>
        <h1 style="color: #696969; font-size: 40px" >See All The Delicious Foods</h1>
        </div>
    </div>
</div>
<br />
<div>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/beef.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"> <h4 class="text-white mb-0">Beef</h4> </a>
                    </div>
                </div>
                </div>         
            </div>  
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/chicken.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"> <h4 class="text-white mb-0">Chicken</h4></a>
                    </div>
                </div>
                </div>         
            </div>  
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/dessert.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Dessert</h4></a>
                    </div>
                </div>
                </div>         
            </div>    
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/lamb.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Lamb</h4></a>
                    </div>
                </div>
                </div>         
            </div>  
        </div>
        <br />
        <div class="row">
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/miscellaneous.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Miscellaneous</h4></a>
                    </div>
                </div>
                </div>         
            </div> 
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/pasta.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="PastaMeals"><h4 class="text-white mb-0">Pasta</h4></a>
                    </div>
                </div>
                </div>         
            </div> 
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/seafood.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Seafood</h4></a>  
                    </div>
                </div>
                </div>         
            </div>
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/side.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Side</h4></a> 
                    </div>
                </div>
                </div>         
            </div>  
        </div>
        <br />
        <div class="row">
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/starter.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Starter</h4></a> 
                    </div>
                </div>
                </div>         
            </div> 
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/vegan.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Vegan</h4></a> 
                    </div>
                </div>
                </div>         
            </div>  
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/vegetarian.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Vegetarian</h4></a>
                    </div>
                </div>
                </div>         
            </div>
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/breakfast.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Breakfast</h4></a>     
                    </div>
                </div>
                </div>         
            </div>     
        </div>
        <br />
        <div class="row">
            <div class="col-sm-3">
                <div class="bg-image" style="background-color:rgba(0,0,0, 0.3);">
                <img src="https://www.themealdb.com/images/category/goat.png" class="img-fluid">
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <a href="#"><h4 class="text-white mb-0">Dessert</h4></a>
                    </div>
                </div>
                </div>         
            </div>   
        </div>

    </div>
</div>





    hallo from home test 

</template>

<style scoped>

</style>