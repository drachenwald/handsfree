Hands-free group websites
=========================

For groups that absolutely, positively _do not want_ a webminister, or
have the hassle of maintaining your own website.

This is a Javascript web app, written in React, that renders a very basic
website for a shire or other group. When a user hits the website, the first
thing the app does is fetch the Drachenwald regnum, events and group data
from the main Drachenwald website (which has already been gathered with the
appropriate consent). Once they've arrived then, based on the domain name
of the request, the app will render a website with contact and event
information from those sources.

The website is a single chunk of code; everything is rendered dynamically
depending on the domain name in the request. Therefore, it's not feasible
to make custom changes for individual groups. If something is to be
rendered, it must come from the machine-readable files maintained by the
Drachenwald webminister. On the other hand, any updates to those files
are immediately reflected in this website (because the user's browser is
fetching those files directly) and any updates to this code are reflected
across all websites simultaneousy.

To add a group (shire/canton/etc) to this website, the step are:

1. Add the domain name of the group to `src/config.json` in the `domains`
   array. Make sure to use the same name for the group as appears in the
   Drachenwald webminister's `regnum-groups.json`.

2. Create a new file under `src/scss/groups` with the "slugged" name of
   the group, ending `.scss`. The name must match the name in step 1, but
   lower case, ASCII characters only, and with spaces replaced by `-`
   dashes. Paste the below, substituting appropriate colours for the
   website (e.g. based on the group's device.)
   ```
   $theme-colors: (
     "primary": #333333,       // make this a dark colour
     "secondary": #ffffff,     // make this a light colour
   );

   @import '../common.scss';
   ```

3. Add a PNG image of the group's device under `public/img/heraldry`,
   again using the "slugged" name of the group.

4. Add the domain name under Custom Domain Names in the Cloudflare Pages
   settings.

5. Make a DNS entry for the domain name as a CNAME to `handsfree.pages.dev`.

That's it.

This doesn't work with apex domains (e.g. `example.com`), as they can't be
CNAMEs (unless they're already hosted by Cloudflare.) Instead, set up
another website somewhere that does a redirect to `www.example.com`.

Anna Wilson - handsfree@annawilson.eu
