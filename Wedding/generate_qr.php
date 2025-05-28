<?php
require_once 'includes/config.php';
require_once __DIR__ . '/vendor/autoload.php'; // solo si usas Composer

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\PngWriter;

// Lista de invitados base (puede venir de CSV, Excel, etc.)
$guests = [
    ['name' => 'Carlos Martínez', 'email' => 'carlos@example.com', 'guest_count' => 2],
    ['name' => 'Ana Gómez', 'email' => 'ana@example.com', 'guest_count' => 1],
    ['name' => 'María y Pablo', 'email' => 'familia@example.com', 'guest_count' => 2],
];

// Carpeta donde se guardarán los QR
$outputDir = __DIR__ . '/qrcodes';
if (!file_exists($outputDir)) {
    mkdir($outputDir, 0755, true);
}

foreach ($guests as $guest) {
    // Crear clave única
    $key = bin2hex(random_bytes(5));

    // Insertar en la base de datos
    $stmt = $pdo->prepare("INSERT INTO guests (name, email, access_key, guest_count) VALUES (?, ?, ?, ?)");
    $stmt->execute([$guest['name'], $guest['email'], $key, $guest['guest_count']]);

    // Generar URL con clave
    $url = "https://tuboda.com/access.php?key=$key"; // cámbialo al dominio real

    // Crear QR con Endroid
    $result = Builder::create()
        ->writer(new PngWriter())
        ->data($url)
        ->size(300)
        ->margin(10)
        ->build();

    $filename = $outputDir . '/' . preg_replace('/[^a-zA-Z0-9]/', '_', $guest['name']) . '.png';
    $result->saveToFile($filename);

    echo "QR generated for: {$guest['name']}<br>";
}
?>
