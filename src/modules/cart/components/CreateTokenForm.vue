<template>
    <div class="signup-form">
    <form action="/" method="POST">
            <h2>Crear Token</h2>
            <p>Por favor llene los siguientes datos</p>
            <hr>
            <div class="form-group">
               
                <input type="text" class="form-control" name="song_name" placeholder="Nombre de la Canción" required="required">     	
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="description" placeholder="Descripción">
            </div>
            <div class="form-group">
                <label for="file">Suba la imagen (.png) de su canción</label>
                <input type="file" class="form-control" name="image" accept="image/png" required="required">
            </div>
            <div class="form-group">
                <label for="file">Suba el audio (.mp3) de su canción</label>
                <input type="file" class="form-control" name="sound"  accept="audio/mpeg" required="required">
            </div>        
            <div class="form-group">
                <label class="form-check-label"><input type="checkbox" required="required"> Acepto los <a href="/legal">Términos y Condiciones</a></label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg" style="color: white;">Crear</button>
            </div>
        </form>
    </div>
</template>

<style>
.form-control {
	height: 41px;
	background: #f2f2f2;
	box-shadow: none !important;
	border: none;
}
.form-control:focus {
	background: #e2e2e2;
}
.form-control, .btn {        
	border-radius: 3px;
}
.signup-form {
	width: 400px;
	margin: 30px auto;
}
.signup-form form {
	color: #999;
	border-radius: 3px;
	margin-bottom: 15px;
	background: #fff;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	padding: 30px;
}
.signup-form h2  {
	color: #333;
	font-weight: bold;
	margin-top: 0;
}
.signup-form hr  {
	margin: 0 -30px 20px;
}    
.signup-form .form-group {
	margin-bottom: 20px;
}
.signup-form input[type="checkbox"] {
	margin-top: 3px;
}
.signup-form .row div:first-child {
	padding-right: 10px;
}
.signup-form .row div:last-child {
	padding-left: 10px;
}
.signup-form .btn {        
	font-size: 16px;
	font-weight: bold;
	background: #3598dc;
	border: none;
	min-width: 140px;
}
.signup-form .btn:hover, .signup-form .btn:focus {
	background: #2389cd !important;
	outline: none;
}
.signup-form a {
	color: #fff;
	text-decoration: underline;
}
.signup-form a:hover {
	text-decoration: none;
}
.signup-form form a {
	color: #3598dc;
	text-decoration: none;
}	
.signup-form form a:hover {
	text-decoration: underline;
}
.signup-form .hint-text  {
	padding-bottom: 15px;
	text-align: center;
}
</style>