
    const wheel = document.getElementById('wheel');
    const spinBtn = document.getElementById('spin-btn');
    const finalValue = document.getElementById('final-value');

    const rotationValues = [
      { minDegree: 0, maxDegree: 60, value: '₹1000' },
      { minDegree: 61, maxDegree: 120, value: '₹5000' },
      { minDegree: 121, maxDegree: 180, value: '₹500' },
      { minDegree: 181, maxDegree: 240, value: '₹250' },
      { minDegree: 241, maxDegree: 300, value: '₹1500' },
      { minDegree: 301, maxDegree: 360, value: '₹9000' },
    ];

    let currentRotation = 0;
    let isSpinning = false;

    function calculateValue(angle) {
      for (let i = 0; i < rotationValues.length; i++) {
        const { minDegree, maxDegree, value } = rotationValues[i];
        if (angle >= minDegree && angle <= maxDegree) {
          return value;
        }
      }
    }

    function spinWheel() {
      const spinDuration = 4000; // Duration in ms
      const spinAngle = Math.floor(Math.random() * 360) + 1440; // 4 full rotations minimum
      const startTime = Date.now();

      if (isSpinning) return;

      isSpinning = true;
      spinBtn.disabled = true;
      finalValue.innerHTML = '<p>Good Luck!</p>';

      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1); // Ensure progress is between 0 and 1
        currentRotation = progress * spinAngle;

        wheel.style.transform = `rotate(${currentRotation}deg)`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          const finalAngle = currentRotation % 360;
          const result = calculateValue(finalAngle);
          finalValue.innerHTML = `<p>You won: ${result}</p>`;
          isSpinning = false;
          spinBtn.disabled = false;
        }
      }

      requestAnimationFrame(animate);
    }

    spinBtn.addEventListener('click', () => {
      spinWheel();
    });
 