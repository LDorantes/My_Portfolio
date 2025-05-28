<?php
require_once __DIR__ . '/vendor/autoload.php';

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\PngWriter;

$url = "https://example.com";

$result = Builder::create()
    ->writer(new PngWriter())
    ->data($url)
    ->size(300)
    ->margin(10)
    ->build();

header('Content-Type: image/png');
echo $result->getString();
exit;
