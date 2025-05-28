<?php
session_start();

// Redirect to access page if no guest is logged in
if (!isset($_SESSION['guest'])) {
    header('Location: access.php');
    exit;
}

$guest = $_SESSION['guest'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Welcome to Our Wedding</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <main>
    <section class="welcome">
      <h1>You're Invited, <?= htmlspecialchars($guest['name']) ?>!</h1>
      <p>We are thrilled to celebrate this special day with you.</p>
      <p>Use the menu below to explore details about the event.</p>
    </section>

    <nav>
      <ul>
        <li><a href="agenda.php">Event Agenda</a></li>
        <li><a href="gallery.php">Photo Gallery</a></li>
        <li><a href="rsvp.php">RSVP</a></li>
        <li><a href="gifts.php">Gift Registry</a></li>
      </ul>
    </nav>
  </main>
</body>
</html>
