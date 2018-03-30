<?php

// TEMPLATE GENERIC

    include("_header.php");
    header('Access-Control-Allow-Origin: *');

?>

        <div id="block-wrapper">

            <div class="logo">
                <img src="../assets/images/serviceplanlogo.jpg" alt="">
            </div>

            <div class="dot-navigation">
                <ul class="nav navbar-nav">
                    <li><a href="#p1" id="high1"></a></li>
                    <li><a href="#p2" id="high2"></a></li>
                    <li><a href="#p3" id="high3"></a></li>
                    <li><a href="#p4" id="high4"></a></li>
                </ul>
            </div>

            <?php include '_partials/_block_test.php'; ?>

        </div>

<?php include("_footer.php"); ?>