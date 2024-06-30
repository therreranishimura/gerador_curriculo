<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
<?php

$username = $_POST['username'];
$idade = $_POST['idade'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$cep = $_POST['cep'];
$escolaridade = $_POST['escolaridade'];
$curso = $_POST['curso'];
$instituicao = $_POST['instituicao'];
$empresa = $_POST['empresa'];
$cargo = $_POST['cargo'];
$periodo = $_POST['periodo'];

?>
 <div class="body">
    <div style="display: block; background-color: rgb(255, 255, 255);
    border-radius: 1px; margin: 14px; min-width: 600px; width: 100%; box-shadow: 0 3px 5px rgba(0, 0,0, 0.5);">
    <section class="header"><h1>Tatiane Herrera Nishimura</h1></section><br>
    <div style="padding-left: 10px;">
        <p><span class="label">26 anos</span><?php echo $_idade; ?></p>
        <p><span class="label"></span><?php echo $email; ?></p>
        <p><span class="label"></span><?php echo $telefone; ?></p>
        <p><span class="label"></span><?php echo $cep; ?></p>
    </div>
    
    <div style="padding-left: 10px;">
        <h3 style="background: #ffffff; border-radius: 8px; padding: 10px; text-align: center; color: #36393c">Formação Acadêmica</h3><br>
        <p><span class="label">Escolaridade:</span> <?php echo $escolaridade; ?></p><br>
        <p><span class="label">Curso: <?php echo $curso; ?></p><br>
        <p><span class="label">Instituição:</span> <?php echo $instituicao; ?></p><br>
    </div>

    <div style="padding-left: 10px;">
        <h3 style="background: #ffffff; border-radius: 8px; padding: 10px; text-align: center; color: #36393c">Experiências profissionais</h3><br>
        <p><span class="label">Empresa:</span> <?php echo $empresa; ?></p><br>
        <p><span class="label">Operador de máquina</span> <?php echo $cargo; ?></p><br>
        <p><span class="label">Período:</span> <?php echo $periodo; ?></p><br>
    </div>

    <button onclick="window.print()" style=" background-color: #29a8a8;
    color: #ffffff; width: 80%; max-width 300px; border-radius: 14px; padding:3px; border: 0;
    font-size: 12px;cursor: pointer; margin-top: 14px; margin-left:50px; margin-bottom: 8px;">Download</button>
    </div>
    </div>

</body>
</html>









