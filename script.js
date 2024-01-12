function toggleFeatures(plan) {
    var features = document.getElementById(plan + '-features');
    features.style.display = (features.style.display === 'none' || features.style.display === '') ? 'block' : 'none';
}
