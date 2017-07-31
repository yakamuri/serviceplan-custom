<?php

// TEMPLATE GENERIC

include("_header.php"); ?>

    <div id="block-wrapper">

    <div class="logo">
        <img src="../assets/images/serviceplanlogo.jpg" alt="">
    </div>

    <div class="dot-navigation">
        <ul>
            <li><a href="#block1" id="high1" class="active"></a></li>
            <li><a href="#block2" id="high2"></a></li>
            <li><a href="#block3" id="high3"></a></li>
            <li><a href="#block4" id="high4"></a></li>
        </ul>
    </div>

        <?php include '_partials/_block_one.php'; ?>

        <?php include '_partials/_block_two.php'; ?>

        <?php include '_partials/_block_three.php'; ?>

        <?php include '_partials/_block_four.php'; ?>

    </div>

<?php include("_footer.php"); ?>