// Toggle JS for dropdowns

let myLabelsRokt = document.querySelectorAll('.lbl-toggle-Rokt');

Array.from(myLabelsRokt).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});



let myLabelsJCD = document.querySelectorAll('.lbl-toggle-JCD');

Array.from(myLabelsJCD).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

let myLabelsDL = document.querySelectorAll('.lbl-toggle-DL');

Array.from(myLabelsDL).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

let myLabelsSW = document.querySelectorAll('.lbl-toggle-SW');

Array.from(myLabelsSW).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

let myLabelsEL = document.querySelectorAll('.lbl-toggle-EL');

Array.from(myLabelsEL).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

let myLabelsLB = document.querySelectorAll('.lbl-toggle-LB');

Array.from(myLabelsLB).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});


   if(window.location.protocol != 'https:') {
      location.href = location.href.replace("http://", "https://");
    }

