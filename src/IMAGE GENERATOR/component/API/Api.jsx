// export REPLICATE_API_TOKEN=<r8_XDrb79CBoCBbPk2e58UC6Pe9nsF6zf23Z3AeQ></r8_XDrb79CBoCBbPk2e58UC6Pe9nsF6zf23Z3AeQ>
export REPLICATE_API_TOKEN=r8_XDrb79CBoCBbPk2e58UC6Pe9nsF6zf23Z3AeQ
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const Api = () => {
    return (
        <div>
            
        </div>
    );
};

export default Api;