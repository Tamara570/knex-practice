BEGIN;


INSERT INTO blogful_articles (title, content, date_published)
VALUES
    ('Learn Things', 'Article that teaches you everything',                      now() - '21 days'::INTERVAL),
    ('Make-up', 'History of makeup and its creation',                            now() - '20 days'::INTERVAL),
    ('Lions', 'Article that teaches you about lions',                            now() - '18 days'::INTERVAL),
    ('Tigers', 'Article that teaches you about tigers',                          now() - '16 days'::INTERVAL),
    ('Learn Animals', 'Article that teaches you about animals',                  now() - '16 days'::INTERVAL),
    ('Hiking', 'How to survive in the wilderness.',                              now() - '13 days'::INTERVAL),
    ('Biking', 'Article that teaches you how to ride a bike',                    now() - '11 days'::INTERVAL),
    ('Music History', 'Article that teaches you about music',                    now() - '8 days'::INTERVAL),
    ('Nature', 'Learn about the wonders of nature',                              now() - '3 days'::INTERVAL),
    ('Living in two pandemics', 'Article about COVID and Global warming',        now() - '2 days'::INTERVAL)
;


COMMIT;