<?php
require_once 'includes/config.php';

if (!isset($_GET['key'])) {
    die('Invalid access.');
}

$key = $_GET['key'];

$stmt = $pdo->prepare("SELECT * FROM guests WHERE access_key = ?");
$stmt->execute([$key]);
$guest = $stmt->fetch();

if (!$guest) {
    die('Access denied.');
}

// Aquí podrías guardar sesión, redirigir, etc.
session_start();
$_SESSION['guest'] = $guest;
header('Location: index.php');
exit;
