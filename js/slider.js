$(document).ready(function() {

  $("#price").slider({
    precision: 2,
    value: 5,
    step: 1,
    min: 0,
    max: 100,
    ticks: [0, 25, 50, 75, 100],
    ticks_labels: ['0%', '25%', '50%', '75%', '100%'],
    ticks_snap_bounds: 1
  });

}
)

