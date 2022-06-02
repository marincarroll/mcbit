<?php
    $data     = mcbit_fetch_greenhouse_jobs();
?>
    <section class="greenhouse">
        <?php foreach( $data as $department => $jobs ) : ?>
            <div class="greenhouse__dept">
                <h2 class="greenhouse__dept-title has-heading-s-font-size"><?= $department ?></h2>
                <div class="row">
                    <?php foreach( $jobs as $job ) : ?>
                        <div class="greenhouse__job col-12 col-sm-6">
                            <a class="greenhouse__job-link" href="<?= $job->absolute_url ?>" target="_blank">
                                <div class="greenhouse__job-text">
                                    <h3 class="greenhouse__job-title has-large-font-size"><?= $job->title ?></h3>
                                    <span class="greenhouse__job-location"><?= $job->location->name ?></span>
                                </div>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endforeach; ?>
        <?= isset( $attributes['addendum'] ) ? '<div class="greenhouse__addendum">' . $attributes['addendum'] . '</div>' : ''; ?>
    </section>