import React from "react";

// Define the feature flag object
const FeatureFlag = {
    IsBetaEnabled: true
};

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the App</h1>
            {FeatureFlag.IsBetaEnabled ? (
                <div style={{ color: "green" }}>
                    <h2>Beta Feature Enabled!</h2>
                    <p>You are seeing the beta version of this feature.</p>
                </div>
            ) : (
                <div style={{ color: "gray" }}>
                    <h2>Standard Version</h2>
                    <p>The beta feature is currently disabled.</p>
                </div>
            )}
        </div>
    );
};

export default App;
