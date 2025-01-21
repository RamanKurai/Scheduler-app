# Schedulrr App

Schedulrr is a modern and intuitive scheduling app designed to streamline appointment management and enhance productivity. Whether you're an individual or a team, Schedulrr makes it simple to schedule meetings, manage appointments, and collaborate effectively.

## Features

- **User Authentication:** Secure sign-in and sign-up functionality using Clerk and Google OAuth.
- **Google Calendar Integration:** Sync events with Google Calendar, complete with Google Meet links.
- **Time Zone Management:** Ensure accurate scheduling by supporting multiple time zones.
- **Responsive Design:** A seamless experience across all devices.
- **Dynamic Testimonials Carousel:** Showcase user feedback with autoplay functionality.
- **Database Integration:** Store user and event data securely using Prisma.

## Tech Stack

- **Frontend:** React, Next.js
- **Backend:** Node.js, Prisma
- **Authentication:** Clerk
- **Database:** PostgreSQL (via Prisma)
- **APIs:** Google Calendar API
- **Styling:** Tailwind CSS
- **Carousel:** Embla Carousel with Autoplay

## Installation

Follow these steps to run Schedulrr locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/schedulrr-app.git
   cd schedulrr-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
   CLERK_API_KEY=<your_clerk_api_key>
   DATABASE_URL=<your_database_url>
   GOOGLE_CLIENT_ID=<your_google_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   ```

4. Run the app:
   ```bash
   npm run dev
   ```
   The app will be accessible at `http://localhost:3000`.

## Usage

1. **Sign Up/Log In:** Register or log in securely using Clerk.
2. **Schedule an Event:** Create and manage events, automatically syncing with Google Calendar.
3. **Invite Guests:** Add attendees and send invites with Google Meet links.
4. **View Testimonials:** See how Schedulrr has transformed productivity for other users.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- **Google Calendar API:** For seamless scheduling and meeting link creation.
- **Clerk:** For providing robust authentication solutions.
- **Embla Carousel:** For the dynamic and responsive carousel implementation.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Author:** Raman Kurai
- **Email:** ramankurai27@gmail.com
- **GitHub:** [github.com/your-username](https://github.com/RamanKurai)
- **Twitter:** [twitter.com/your-twitter-handle](https://twitter.com/RamanKurai)

---

Thank you for using Schedulrr! Happy scheduling! 🎉

