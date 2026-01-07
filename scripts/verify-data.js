import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const noticesPath = path.join(__dirname, '../src/data/notices.json');
const resourcesPath = path.join(__dirname, '../src/data/resources.json');

function verify() {
    try {
        const notices = JSON.parse(fs.readFileSync(noticesPath, 'utf-8'));
        console.log(`Notices count: ${notices.length}`);
        notices.forEach((n, i) => {
            if (!n.text) console.error(`Notice ${i} missing text`);
            if (!n.type) console.error(`Notice ${i} missing type`);
        });

        const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf-8'));
        console.log(`Resources count: ${resources.length}`);
        resources.forEach((r, i) => {
            if (!r.title) console.error(`Resource ${i} missing title`);
            if (!r.subject) console.error(`Resource ${i} missing subject`);
        });
        console.log('Verification done');
    } catch (e) {
        console.error('Error reading/parsing files:', e);
    }
}
verify();
