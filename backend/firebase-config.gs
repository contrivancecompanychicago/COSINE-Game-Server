/**
 * COSINE GAME SERVER - GLOBAL CONFIGURATION
 * These constants are accessible by all other .gs files in this project.
 */

// 1. DATABASE CONNECTIVITY
const FIREBASE_DB_URL = 'https://YOUR-PROJECT-ID.firebaseio.com/';

// 2. EXTERNAL COMMUNICATIONS
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/YOUR/WEBHOOK/PATH';
const NARRATOR_AVATAR_URL = 'https://path-to-your-avatar.png';

// 3. GAME STATE PATHS (FIREBASE NODES)
const PATH_ZONE_DATA = 'public_nuisance_city/zones';
const PATH_GAME_STATE = 'public_nuisance_city/gameState';
const PATH_RESIDENTS = 'residents';

// 4. GAME BALANCE & TUNING
const REQUIRED_HITS_FOR_SYNC = 3;
const TIME_TOKEN_PENALTY = 1;
const DEFAULT_SKILL_SCORE = 10;

// 5. VERSIONING
const SERVER_VERSION = '1.3.0';
const CURRENT_EVENT = 'DOVIC_Outbreak_Phase_1';
