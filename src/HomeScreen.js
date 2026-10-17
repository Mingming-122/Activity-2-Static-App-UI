import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { CATEGORIES, FLASH_DEALS, POPULAR_PRODUCTS } from './mockData';
import { COLORS, styles } from './styles';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState(['fd-1', 'p-1', 'p-2']);
  const [activeTab, setActiveTab] = useState('Home');

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      {/* 1. Header Section */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <View style={styles.locationPinBg}>
            <Ionicons name="location-sharp" size={17} color={COLORS.primary} />
          </View>
          <View>
            <Text style={styles.locationLabel}>DELIVER TO</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.locationSelectRow}>
              <Text style={styles.locationText}>Calbayog City, Samar</Text>
              <Ionicons name="chevron-down" size={14} color={COLORS.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={20} color={COLORS.textPrimary} />
            <View style={styles.badgeNotification}>
              <Text style={styles.badgeNotificationText}>3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.avatarButton}>
            <Image
              source={{
                uri: 'https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/486868889_3998167563730962_8705315086004188535_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEC2HRNmZu3RoiOGuRomrFNp52rPMZZolqnnas8xlmiWljPfXRwEMHUCAO3EAtn9kiTbcwJoreSSoi9BKNEBDzB&_nc_ohc=s5yAuI7aEegQ7kNvwFk7l70&_nc_oc=AdrrfzCNoiFksV61yUkxWRIuAzlf4Te46if2AgJXIm1qFkVEjitgzzk3wRu6m6n5VIM&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=hw4nM2s7vsuZFrg1g3j7HA&_nc_ss=7b2a8&oh=00_AQO-5IE3Q-aEuQMTGtatQ_xyHGquthEDYtmHa6tYXAHMVw&oe=6AD934FC',
              }}
              style={styles.avatarImage}
            />
            <View style={styles.onlineDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scrollable Content */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Welcome Greeting */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Hello, Yasmien 🧶</Text>
          <Text style={styles.greetingSubtitle}>
            Find cozy handmade creations, amigurumi & crochet patterns
          </Text>
        </View>

        {/* 3. Search & Filter Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Feather name="search" size={18} color={COLORS.textMuted} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search amigurumi, yarn, crochet patterns..."
              placeholderTextColor={COLORS.textMuted}
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearButton}>
                <Ionicons name="close-circle" size={18} color={COLORS.textMuted} />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* 4. Promotional Hero Banner */}
        <View style={styles.heroBannerContainer}>
          <View style={styles.heroBanner}>
            <View style={styles.heroLeft}>
              <View style={styles.heroPill}>
                <Ionicons name="sparkles" size={12} color={COLORS.warning} />
                <Text style={styles.heroPillText}>HANDMADE WITH LOVE</Text>
              </View>

              <Text style={styles.heroHeading}>Cozy Up Your Space{'\n'}With Crochet</Text>
              <Text style={styles.heroDescription}>
                Artisan amigurumi, soft milk cotton yarns & digital patterns by Filipino crafters.
              </Text>

              <TouchableOpacity activeOpacity={0.85} style={styles.heroCta}>
                <Text style={styles.heroCtaText}>Shop Patterns</Text>
                <Feather name="arrow-right" size={14} color={COLORS.white} />
              </TouchableOpacity>
            </View>

            <View style={styles.heroRight}>
              <View style={styles.heroFloatingBadge}>
                <Text style={styles.heroBadgeText}>-30%</Text>
              </View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80',
                }}
                style={styles.heroProductImage}
              />
            </View>
          </View>

          {/* Carousel Pagination Dots */}
          <View style={styles.carouselPagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* 5. Quick Categories */}
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Crochet Categories</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  activeOpacity={0.75}
                  onPress={() => setSelectedCategory(cat.id)}
                  style={[styles.categoryChip, isSelected && styles.activeCategoryChip]}
                >
                  <View
                    style={[
                      styles.categoryIconWrap,
                      isSelected && styles.activeCategoryIconWrap,
                    ]}
                  >
                    <Ionicons
                      name={cat.icon}
                      size={15}
                      color={isSelected ? COLORS.primary : COLORS.textSecondary}
                    />
                  </View>
                  <Text
                    style={[
                      styles.categoryLabel,
                      isSelected && styles.activeCategoryLabel,
                    ]}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* 6. Flash Deals Section */}
        <View style={styles.flashDealsSection}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleWithBadge}>
              <Text style={styles.sectionTitle}>Handmade Deals</Text>
              <View style={styles.timerBadge}>
                <Ionicons name="time-outline" size={13} color={COLORS.warningDark} />
                <Text style={styles.timerText}>02:45:18</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalDealsList}
          >
            {FLASH_DEALS.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  style={styles.dealCard}
                >
                  <View style={styles.dealImageWrap}>
                    <Image source={{ uri: item.image }} style={styles.dealImage} />
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountBadgeText}>{item.discount}</Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.cardFavButton}
                      onPress={() => toggleFavorite(item.id)}
                    >
                      <Ionicons
                        name={isFav ? 'heart' : 'heart-outline'}
                        size={18}
                        color={isFav ? COLORS.danger : COLORS.textSecondary}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.dealCardBody}>
                    <Text style={styles.dealCategory}>{item.category.toUpperCase()}</Text>
                    <Text style={styles.dealTitle} numberOfLines={1}>
                      {item.title}
                    </Text>

                    <View style={styles.ratingRow}>
                      <Ionicons name="star" size={14} color={COLORS.warning} />
                      <Text style={styles.ratingNumber}>{item.rating}</Text>
                      <Text style={styles.reviewsCount}>({item.reviews})</Text>
                    </View>

                    <View style={styles.priceRow}>
                      <View>
                        <Text style={styles.dealPrice}>₱{item.price.toFixed(2)}</Text>
                        <Text style={styles.dealOriginalPrice}>
                          ₱{item.originalPrice.toFixed(2)}
                        </Text>
                      </View>
                      <TouchableOpacity activeOpacity={0.8} style={styles.addCartBtn}>
                        <Ionicons name="add" size={18} color={COLORS.white} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* 7. Value Props / Perks Banner */}
        <View style={styles.perksRow}>
          <View style={styles.perkCard}>
            <View style={[styles.perkIconBg, { backgroundColor: COLORS.primaryLight }]}>
              <Feather name="heart" size={16} color={COLORS.primary} />
            </View>
            <Text style={styles.perkTitle}>100% Handmade</Text>
            <Text style={styles.perkSubtitle}>Crafted with love</Text>
          </View>

          <View style={styles.perkCard}>
            <View style={[styles.perkIconBg, { backgroundColor: COLORS.successLight }]}>
              <Feather name="download" size={16} color={COLORS.successDark} />
            </View>
            <Text style={styles.perkTitle}>Instant PDF</Text>
            <Text style={styles.perkSubtitle}>For digital patterns</Text>
          </View>

          <View style={styles.perkCard}>
            <View style={[styles.perkIconBg, { backgroundColor: COLORS.warningLight }]}>
              <Feather name="truck" size={16} color={COLORS.warningDark} />
            </View>
            <Text style={styles.perkTitle}>Calbayog Ships</Text>
            <Text style={styles.perkSubtitle}>Fast local dispatch</Text>
          </View>
        </View>

        {/* 8. Popular Essentials Grid */}
        <View style={styles.popularSection}>
          <View style={styles.sectionHeaderRow}>
            <View>
              <Text style={styles.sectionTitle}>Popular For You</Text>
              <Text style={styles.sectionSubtitle}>Handpicked patterns & amigurumi</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>View More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.gridContainer}>
            {POPULAR_PRODUCTS.map((prod) => {
              const isFav = favorites.includes(prod.id);
              return (
                <TouchableOpacity
                  key={prod.id}
                  activeOpacity={0.9}
                  style={styles.gridCard}
                >
                  <View style={styles.gridImageWrap}>
                    <Image source={{ uri: prod.image }} style={styles.gridImage} />
                    <View style={styles.tagBadge}>
                      <Text style={styles.tagBadgeText}>{prod.tag}</Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.cardFavButton}
                      onPress={() => toggleFavorite(prod.id)}
                    >
                      <Ionicons
                        name={isFav ? 'heart' : 'heart-outline'}
                        size={17}
                        color={isFav ? COLORS.danger : COLORS.textSecondary}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.gridBody}>
                    <Text style={styles.gridTitle} numberOfLines={2}>
                      {prod.title}
                    </Text>

                    <View style={styles.ratingRow}>
                      <Ionicons name="star" size={13} color={COLORS.warning} />
                      <Text style={styles.ratingNumber}>{prod.rating}</Text>
                      <Text style={styles.reviewsCount}>({prod.reviews})</Text>
                    </View>

                    <View style={styles.gridPriceRow}>
                      <View>
                        <Text style={styles.gridPrice}>₱{prod.price.toFixed(2)}</Text>
                        <Text style={styles.gridOriginalPrice}>
                          ₱{prod.originalPrice.toFixed(2)}
                        </Text>
                      </View>
                      <TouchableOpacity activeOpacity={0.8} style={styles.gridAddBtn}>
                        <Ionicons name="add" size={16} color={COLORS.primary} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Bottom Padding for floating nav */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* 9. Fixed Bottom Navigation Bar */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          {[
            { id: 'Home', label: 'Shop', activeIcon: 'basket', inactiveIcon: 'basket-outline' },
            { id: 'Patterns', label: 'Patterns', activeIcon: 'document-text', inactiveIcon: 'document-text-outline' },
            { id: 'Cart', label: 'Cart', activeIcon: 'bag', inactiveIcon: 'bag-handle-outline', badge: 2 },
            { id: 'Saved', label: 'Saved', activeIcon: 'heart', inactiveIcon: 'heart-outline' },
            { id: 'Profile', label: 'Profile', activeIcon: 'person', inactiveIcon: 'person-outline' },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.navItem}
                activeOpacity={0.75}
                onPress={() => setActiveTab(item.id)}
              >
                <View
                  style={[
                    styles.navIconContainer,
                    isActive && styles.activeNavIconBg,
                  ]}
                >
                  <Ionicons
                    name={isActive ? item.activeIcon : item.inactiveIcon}
                    size={22}
                    color={isActive ? COLORS.primary : COLORS.textMuted}
                  />
                  {item.badge && (
                    <View style={styles.navBadge}>
                      <Text style={styles.navBadgeText}>{item.badge}</Text>
                    </View>
                  )}
                </View>
                <Text
                  style={[
                    styles.navLabel,
                    isActive && styles.activeNavLabel,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
