# Activity 2 - Static App UI (Loop Studio)

A modern, responsive e-commerce mobile application UI built with **React Native** and **Expo**.

---

## 📁 Project Structure

The project has been organized into a flat, clean structure inside the `src/` directory without separate nested folders, making it easy to edit and upload:

```text
Activity-2-Static-App-UI/
├── src/
│   ├── App.js                 # App root wrapper with SafeAreaView & StatusBar
│   ├── HomeScreen.js          # Complete screen UI (Header, Banner, Categories, Deals, Grid, Nav)
│   ├── mockData.js            # Categories, Flash Deals & Philippine Products data
│   └── styles.js              # Theme color palette, constants & StyleSheet styles
├── App.js                     # Root entry re-exporting src/App
├── app.json                   # Expo configuration
├── index.js                   # Application entry point registered with Expo
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

> **For Uploads / Submissions**:
> If your instructor requires uploading only the editable files without nested folders, upload the files inside `src/`:
> - `App.js`
> - `HomeScreen.js`
> - `mockData.js`
> - `styles.js`

---

## 🇵🇭 Philippine Products & Calbayog City Delivery

- **Location**: Set to **Calbayog City, Samar** (`Header` delivery location).
- **Products**: Local Philippine products including Samar handwoven crafts, Batangas Liberica Barako coffee, Cebu dried mangoes, and Calbayog smoked tinapa.
- **Preserved**: The **Best Seller** (*Crochet Doll Pattern: Amigurumi Doll Maya and Lokum*) and **Trending** (*Teddy Bear Crochet Pattern: Amigurumi Plush Toy*) items are preserved in the popular products section.

---

## 🛠️ How to Edit Content

- **Change or add products / categories / deals**: Edit [`src/mockData.js`](src/mockData.js)
- **Change layout or interactions**: Edit [`src/HomeScreen.js`](src/HomeScreen.js)
- **Change colors or styles**: Edit [`src/styles.js`](src/styles.js)
- **Modify root settings**: Edit [`src/App.js`](src/App.js)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Expo Go app on your physical mobile device, or an Android/iOS emulator / web browser

### Running the App
1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Choose your platform:
   - Press `w` to open in the **web browser**
   - Press `a` to run on an **Android emulator/device**
   - Press `i` to run on an **iOS simulator**
   - Scan the QR code with **Expo Go** on Android/iOS